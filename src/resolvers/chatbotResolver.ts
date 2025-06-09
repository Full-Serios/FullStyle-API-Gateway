import axios from 'axios';

export const chatbotResolver = {
  chatbotResponse: async (_: any, { input }: { input: string }) => {
    const res = await axios.post('http://localhost:5001/chat', { message: input });
    return res.data.reply;
  },
};
