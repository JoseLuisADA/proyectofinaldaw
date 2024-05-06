import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()

  const expiresDate = new Date(body.expires)
  const expiresString = expiresDate.toUTCString()

  const cookieHeaderValue = `${body.name}=${body.value}; Expires=${expiresString}; HttpOnly; Secure; Path=/`

  const updatedHeaders = { ...res.headers, 'Set-Cookie': cookieHeaderValue }

  const updatedResponse = new NextResponse(null, {
    headers: updatedHeaders,
    status: 200,
  })
  return updatedResponse
}
