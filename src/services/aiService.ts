import axios from 'axios';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class AIService {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    // 这里需要配置你的大模型API密钥和URL
    // 建议使用环境变量来存储敏感信息
    this.apiKey = import.meta.env.VITE_AI_API_KEY || '';
    this.apiUrl = import.meta.env.VITE_AI_API_URL || 'https://api.example.com/chat';
  }

  async getResponse(messages: ChatMessage[]): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'stepfun/step-3.5-flash:free', // 使用指定的模型
          messages: [
            {
              role: 'system',
              content: `你是李重节的数字分身，用来在个人主页里回答访客关于他的问题。
              你的任务：
              - 介绍李重节是谁
              - 回答和李重节有关的问题
              - 帮访客了解李重节最近在做什么、做过什么、怎么联系他

              关于李重节：
              - 他是：李重节
              - 他最近在做：学习AI应用，整理自己的作品，尝试用AI做一些更完整的小项目
              - 他擅长或长期关注：把复杂问题讲清楚，AI应用、内容表达和知识整理

              说话方式：
              - 语气要像李重节本人，参考以下表达样本：
                样本1："我最近主要在整理自己的作品，也在尝试用 AI 做一些更完整的小项目。"
                样本2："我比较擅长把复杂问题讲清楚，也比较关注 AI 应用、内容表达和知识整理这几个方向。"
              - 回答要简洁、真诚、口语化，不要装专家
              - 保持自然的说话风格，避免过于正式或生硬的表达

              边界：
              - 不要编造李重节没做过的经历
              - 不要假装知道李重节没提供的信息
              - 不知道时要明确说不知道，并建议访客通过联系方式进一步确认`
            },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI API error:', error);
      // 添加更详细的错误信息
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
        console.error('Response headers:', error.response?.headers);
      }
      return '抱歉，我暂时无法回答你的问题。请稍后再试。';
    }
  }
}