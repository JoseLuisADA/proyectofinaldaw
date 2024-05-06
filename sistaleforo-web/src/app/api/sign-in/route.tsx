import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_SISTALE_FORUM_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: body.username,
        password: body.password,
      }),
    });

    return NextResponse.json(data.data);
  } catch (error: any) {
    // Verifica si error.response existe y maneja los códigos de estado
    if (error.response) {
      if (error.response.status >= 400 && error.response.status < 500) {
        // Cambiado a 401 Unauthorized para reflejar más adecuadamente un error de autenticación
        return new Response('Usuario o contraseña incorrectas', { status: 401 });
      } else {
        return new Response('Página no disponible en estos momentos', { status: 500 });
      }
    } else {
      return new Response('Página no disponible en estos momentos', { status: 500 });
    }
  }
}
