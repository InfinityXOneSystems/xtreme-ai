import { groqChat } from "./groq"
import { ollamaChat } from "./ollama"

export async function generate(messages) {
  const provider = process.env.LLM_PROVIDER || "auto"

  if (provider === "groq") {
    return await groqChat(messages)
  }

  if (provider === "ollama") {
    return await ollamaChat(messages)
  }

  try {
    return await groqChat(messages)
  } catch (err) {
    console.log("Groq failed � falling back to Ollama")
    return await ollamaChat(messages)
  }
}
