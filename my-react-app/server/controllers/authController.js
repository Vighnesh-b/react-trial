import { UserModel as User } from '../models/user.js';
import { hashPassword,comparePassword } from '../helpers/auth.js';
import jwt from 'jsonwebtoken';


const test = (req, res) => {
    res.json('test is working');
}

//register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.json({ error: 'Name is required' });
        }
        if (!password || password.length < 8) {
            return res.json({
                error: 'Password is required and should be at least 8 characters long'
            });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is already taken'
            });
        }

        const hashedPassword=await hashPassword(password)

        const user = await User.create({
            name, email, password:hashedPassword,
        });

        res.json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found'
            });
        }

        const match = await comparePassword(password, user.password);
        if (match) {
            const token = jwt.sign(
                { email: user.email, id: user._id, name: user.name },
                process.env.JWT_SECRET, {}, (err, token) => {
                    if(err) throw err;
                    res.cookie;
                    res.cookie('token', token).json(user)

                }
            );
        }

        if (!match) {
            return res.json({
                error: 'Passwords do not match'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export { test, registerUser,loginUser };
//res.json('passwords match')