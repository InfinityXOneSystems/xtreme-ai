import ollama from "ollama"

export async function ollamaChat(messages) {
  const response = await ollama.chat({
    model: process.env.OLLAMA_MODEL || "llama3",
    messages
  })

  return response.message.content
}
