import Groq from "groq-sdk"

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function groqChat(messages) {
  const res = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages
  })

  return res.choices[0].message.content
}
