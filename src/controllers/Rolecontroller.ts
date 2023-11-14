import { Request, Response } from "express";
import Role from "../models/role";

const GetRole = async (req:Request, res:Response):Promise <Response> => {
    try {
        const role=await Role.findAll({
            where: {active:true}
        })
        return res.status(200).send({
            status:200,
            message: "Oke",
            data: role
        })
    }catch (err:any) {
        return res.status(500).send({
            status:500,
            message: "Error",
            error: err
    })
    }
}

export default {GetRole}
