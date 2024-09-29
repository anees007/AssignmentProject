import { Model, DataTypes } from "sequelize";
import sequelize from "@src/configs/db";

class Product extends Model {
  public id!: number;
  public title!: string;
  public providerId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    tableName: "products",
    timestamps: true,
  }
);

export default Product;
