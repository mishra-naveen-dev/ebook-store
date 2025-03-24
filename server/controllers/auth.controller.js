import dotenv from 'dotenv';
import db from '../config/db.js';
import bcrypt from 'bcrypt';
import { generateTokens } from '../middleware/genretTokens.js';

dotenv.config();


export const createUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const values = [
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.phone_no,
        hashedPassword
    ];

    const sql = "INSERT INTO user (`name`,`email`,`address`,`phone_no`,`password`) VALUES (?)";

    db.query(sql, [values], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        return res.json({ message: "Signup Successful" });
    });
}


export const loginUser = async (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    await db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Database error" });
                }
                if (response) {
                    const token = generateTokens(data);

                    return res.json({ message: "Login Successful", token });
                } else {
                    return res.status(401).json({ message: "Invalid Password" });
                }
            });

        }
        else {
            return res.status(401).json({ message: "Invalid Email / No email existed" });
        }
    })
};