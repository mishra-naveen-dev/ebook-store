import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateTokens = (data) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const payload = { user: { userId: data } }
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
};

