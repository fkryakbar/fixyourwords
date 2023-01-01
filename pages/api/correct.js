import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default async function handler(req, res) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Correct this to standard English:\n\nhi dunia.`,
      temperature: 0,
      max_tokens: 4000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    if (response.status == 200) {
      res.json({
        status: 200,
        corrected_text: response.data.choices[0],
      });
    } else {
      res.json({
        status: 400,
        message: "something went wrong",
      });
    }
  } catch (e) {
    res.json({
      status: 400,
      message: e,
    });
  }
}
