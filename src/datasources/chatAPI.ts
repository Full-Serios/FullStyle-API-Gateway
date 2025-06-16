import axios from 'axios';
import { ChatRequest, ChatResponse } from '../types/chat';
import { CHAT_BASE_URL } from '../config/constants';

export class ChatAPI {
  async sendMessage(input: ChatRequest): Promise<ChatResponse> {
    try {
      const response = await axios.post(`${CHAT_BASE_URL}/send`, input);
      return response.data;
    } catch (error: any) {
      console.error('❌ Chat API error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.detail || 'Failed to send message');
    }
  }
}
