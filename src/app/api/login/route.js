
import pool from '../utils/db';
import jwt from 'jsonwebtoken';


const SECRET_KEY = 'test';


export async function POST(request) {
    const data = await request.json();

    const { email, password } = data;

    if (email === 'test@gmail.com' && password === 'password') {
        const token = jwt.sign(
            { email },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        return new Response(
            JSON.stringify({ message: 'Login successful', token }),
            {
                status: 200,
                headers: {
                    'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`,
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
    });
}