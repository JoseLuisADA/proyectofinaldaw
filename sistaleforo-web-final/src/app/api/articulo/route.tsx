"use server"
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const size = searchParams.get('size') || '10';

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/articulos`,
      {
        params: { page, size },
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Permitir el uso de cookies en la solicitud
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return new Response(error.response.data.message || 'Error desconocido al obtener los artículos', { status: error.response.status });
      }
    }
    return new Response('Error interno', { status: 500 });
  }
}
