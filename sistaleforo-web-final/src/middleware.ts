import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('session')
  
  const url = req.nextUrl;

  if (token) {
    const tokenString = typeof token === 'string' ? token : token.value

    try {
      const decoded = jwt.verify(tokenString, process.env.JWT_SECRET) as jwt.JwtPayload

      if (typeof decoded !== 'object' || decoded === null) {
        return NextResponse.redirect(new URL('/login', req.url))
      }

      req.headers.set('x-username', decoded.username)
      req.headers.set('x-role', decoded.role)

      return NextResponse.next()
    } catch (error) {
      console.warn(error)
    }
  }

  if (url.pathname.startsWith('/')) {
    {/*NOTHING*/}
  }

}

export const config = {
  matcher: ['/']
}
