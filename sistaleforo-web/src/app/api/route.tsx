import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SISTALE_SIGN_IN}/sign_in`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: body.username,
          password: body.password,
        }),
      }
    )

    return NextResponse.json(data.data)
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return new Response('Invalid credentials', { status: 401 })
    } else {
      return new Response('Intern Error', { status: 500 })
    }
  }
}