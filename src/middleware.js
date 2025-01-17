import { NextResponse } from 'next/server';

// Middleware function
export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/admin/:path*', '/admin/login'],
};
