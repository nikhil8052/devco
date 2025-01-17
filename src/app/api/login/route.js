
import pool from '../utils/db';
import jwt from 'jsonwebtoken';


const SECRET_KEY = 'test'; 


export async function POST(request) {
    const data = await request.json();

    const { email, password } = data;

    return new Response(JSON.stringify({ message: 'Login successful' , data }), {
        status: 200,
    });

    if (email === 'test@example.com' && password === 'password123') {
        const token = jwt.sign(
            { email }, 
            SECRET_KEY, 
            { expiresIn: '1h' } 
        );

        return new Response(JSON.stringify({ message: 'Login successful' , token }), {
            status: 200,
        });
    }

    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
    });
}