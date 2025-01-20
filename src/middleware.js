import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Middleware function
export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Apply middleware only to /admin routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Get token from cookies
    const token = request.cookies.get('token');

    if (!token) {
      console.log("Token not found");
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      // Verify the token
      const secretKey = new TextEncoder().encode('test'); 
      const { payload } = await jwtVerify(token.value, secretKey);
      console.log( payload , " Paylopad ")
    } catch (error) {
      console.error('Invalid token:', error.message);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Proceed to the requested route
  return NextResponse.next();
}

// Matcher to apply middleware only to specific routes
export const config = {
  matcher: ['/admin/:path*'],
};
