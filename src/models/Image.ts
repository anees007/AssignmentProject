import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/db';

class Image extends Model {
    public id!: number; // Unique identifier for the image
    public url!: string; // URL of the uploaded image
    public public_id!: string; // Cloudinary public ID
    public format!: string; // Image format (e.g., jpg, png)
    public width!: number; // Width of the image
    public height!: number; // Height of the image
    public resource_type!: string; // Resource type (e.g., image)
    public original_filename!: string; // Original filename
    public comments?: string[]; // Comments related to the image
}

// Define the image model for PostgreSQL
Image.init({
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    public_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    format: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    width: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resource_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    original_filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Storing comments as an array (specific to PostgreSQL)
        allowNull: true,
    },
}, {
    sequelize,
    schema: 'test',   // Reference the correct schema
    tableName: 'images',
    timestamps: true, // Optional: adds createdAt and updatedAt fields
});

export { Image };
