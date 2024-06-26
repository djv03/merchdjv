import customerModel from '../models/customers.js'
import { compareHash, hashThis } from '../utils/authUtils.js';
import JWT from 'jsonwebtoken';
import { checkToken } from '../middleware/authMiddleware.js';

export const registerController = async (req, res) => {

    try {
        //destructuring the body
        const { name, email, password, phone, address,answer } = req.body;

        //now running some tests before saving new customer
        //1. checking required fields
        if (!name) return res.send({ message: "Name is required" });
        if (!email) return res.send({ message: "email is required" });
        if (!password) return res.send({ message: "password is required" });
        if (!answer) return res.send({ message: "answer is required" });


        //2. check if user already exist
        const existingCustomer = await customerModel.findOne({ email: email });
        if (existingCustomer) {
            return res.status(200).send({
                success: false,
                message: "email already exist, please login"
            })
        }

        // now we can register
        const hashedPassword = await hashThis(password);
        const hashedData = { name, email, password: hashedPassword, phone, address,answer };
        const customer = await new customerModel(hashedData).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            customer,
        });

    } catch (error) {
        console.log("erro in registerController", error);
        res.status(500).send({
            success: false,
            message: "erro in registerController",
            error: error
        })
    }
}

export const loginController = async (req, res) => {
    try {
        //destructuring the body
        const { email, password } = req.body;

        // 1. cheking if email and password is there
        if (!password || !email) {
            return res.send({ error: "email and password is required" });
        }

        // 2. checking if that email exist or not
        const customer = await customerModel.findOne({ email });
        if (!customer) {
            return res.status(404).send({
                message: "email not found"
            });
        }

        // now we can do login
        const match = await compareHash(password, customer.password);
        if (!match) {
            return res.status(201).send({
                success: false,
                message: "invalid credentials"
            });
        }
        const token = await JWT.sign({ _id: customer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).send({
            success: true,
            message: "login sucessfully",
            customer: {
                name: customer.name,
                email: customer.email,
                phone: customer?.phone,
                address: customer?.address,
            },
            token,
        });

    } catch (error) {
        console.log("erro in loginController", error);
        res.status(500).send({
            success: false,
            message: "erro in loginController",
            error: error
        })
    }
}

export const forgotPassContoller = async (req, res) => {
    try {
        const { email, newpassword,answer } = req.body
        if (!email) {
            res.status(400).send({ message: "email is required" });
        }
        if (!answer) {
            res.status(400).send({ message: "answer is required" });
        }
        if (!newpassword) {
            res.status(400).send({ message: "newPassword is required" });
        }
        console.log("params checked");
        const customer = await customerModel.findOne({ email, answer });
        if (!customer) {
            console.log("customer not found");
            return res.status(501).send({
                success: false,
                message: "answer doesn't match for given user"
            })
        }
        const hashed= await hashThis(newpassword);
        await customerModel.findByIdAndUpdate(customer._id,{password:hashed});
        
        res.status(201).send({
            success: true,
            message: "password changed sucessfully",
            customer: {
                email: customer.email,
                newpassword:customer.password
            },
        });
        console.log("done");
    } catch (error) {
        console.log("erro in forgotPassContoller", error);
        res.status(500).send({
            success: false,
            message: "erro in forgotPassContoller",
            error: error
        })
    }
}