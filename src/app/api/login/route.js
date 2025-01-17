
export async function POST(request) {
    const data = await request.json();
  
    const { email, password } = data;
  
    return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
      });

    if (email === 'test@example.com' && password === 'password123') {
      return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
      });
    }
  
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
    });
  }