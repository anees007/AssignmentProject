import { Request, Response } from 'express';
import { Image } from '../models/Image'; // Sequelize Image model
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@src/configs/aws";
import EnvVars from "@src/constants/EnvVars";

// Add new image

export const uploadImageS3 = async (req: Request, res: Response) => {
    try {
      // Ensure that a file has been uploaded
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const file = req.file as Express.Multer.File;
      console.log(file.buffer);
      const key = `images/${file.originalname}`;
      const command = new PutObjectCommand({
        Bucket: EnvVars.bucket,
        Key: key,
        Body: file.buffer,
      });
  
      await s3Client.send(command);
  
      const fileUrl = `https://${EnvVars.bucket}.s3.${EnvVars.region}.amazonaws.com/${key}`;
  
      // file url will be store in the BD
      return res.status(200).json({
        message: "File uploaded!",
      });
    } catch (error) {
      const message = error.message || "Failed to upload file";
      return res.status(400).json({ message });
    }
  };
  

// Add comments to existing image
export const addComment = async (req: Request, res: Response) => {
    try {
        const { imageId } = req.params;
        const { comment } = req.body;

        const image = await Image.findByPk(imageId);

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Assuming there's a comments field
        image.comments = image.comments ? [...image.comments, comment] : [comment];
        await image.save();

        return res.status(200).json(image);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
