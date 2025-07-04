import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  const { errorMessage } = await req.json();

  if (!errorMessage) {
    return NextResponse.json({ error: "Error message is required" }, { status: 400 });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an assistant that helps developers fix error messages.",
        },
        {
          role: "user",
          content: `Explain and provide a solution for this error message:\n${errorMessage}`,
        },
      ],
      temperature: 0.4,
      max_tokens: 500,
    });

    const answer = completion.data.choices[0]?.message?.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ error: "Failed to fetch AI response." }, { status: 500 });
  }
}
