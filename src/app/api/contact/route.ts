import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Here you could add logic to send an email, save to a database, etc.
    // For now, just return the received data as a success response.
    return NextResponse.json({
      success: true,
      data: { name, email, message },
      message: 'Contact form submitted successfully.'
    });
  } catch {
    return NextResponse.json({
      success: false,
      message: 'Invalid request.'
    }, { status: 400 });
  }
}
