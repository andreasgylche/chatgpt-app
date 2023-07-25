import openai from '@/lib/chatgpt';

export async function query(prompt, chatId, model) {
  // TODO: Get previous messages from database and append to prompt to get contextually relevant responses

  const completion = await openai
    .createChatCompletion({
      model,
      messages: [prompt],
      maxTokens: 1000,
      temperature: 0.5,
      top_p: 1,
      presencePenalty: 0,
      frequencyPenalty: 0,
      stream: true,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to respond to your prompt. Error: ${err.message}`
    );

  return completion;
}
