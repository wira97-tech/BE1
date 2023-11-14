import { DataTypes, Model, Optional } from "sequelize";
import Connection from "../config/dbConnect"

interface RoleAttributes {
  id?: number;
  rolename?: string;
  active?:boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<RoleAttributes, "id">{}

export interface RoleOutput extends Required<RoleAttributes>{}

class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
  public id!: number;
  public rolename!: string;
  public active!:boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init ({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  rolename: {
    allowNull: true,
    type: DataTypes.STRING
  },
  active: {
    allowNull: true,
    type: DataTypes.BOOLEAN
  },
}, {
  timestamps: true,
  sequelize: Connection,
  underscored: false,

})

export default Role
