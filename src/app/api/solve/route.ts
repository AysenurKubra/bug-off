import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { errorText } = await req.json();

    if (!errorText || typeof errorText !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Eğer GPT-4 yoksa burayı kullan
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides solutions for programming error messages.",
        },
        {
          role: "user",
          content: errorText,
        },
      ],
    });

    return NextResponse.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
