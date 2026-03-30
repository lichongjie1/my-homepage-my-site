import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

const KNOWLEDGE_BASE = {
  identity: "我是一名内容策划，专门研究如何将 AI 应用到抖音等内容平台上。",
  currentWork: "我最近正在搭建自己的个人主页和作品集，同时也尝试用 AI 工具产出更有创意的抖音视频。",
  skills: "我的核心能力在于内容表达、AI 应用场景探索以及知识体系的整理。",
  contact: "你可以通过抖音直接私信我，或者关注我正在建设的作品集，在那里我会分享更多联系方式。",
  works: "目前主要在抖音进行内容实验和 AI 应用案例分享，更多体系化的作品正在整理中，敬请期待！"
};

const getResponse = (input: string): string => {
  const query = input.toLowerCase();

  if (query.includes('你谁') || query.includes('身份') || query.includes('职业')) {
    return KNOWLEDGE_BASE.identity;
  }
  if (query.includes('做什么') || query.includes('目前') || query.includes('最近')) {
    return KNOWLEDGE_BASE.currentWork;
  }
  if (query.includes('擅长') || query.includes('方向') || query.includes('能力') || query.includes('特长')) {
    return KNOWLEDGE_BASE.skills;
  }
  if (query.includes('联系') || query.includes('找到') || query.includes('沟通')) {
    return KNOWLEDGE_BASE.contact;
  }
  if (query.includes('作品') || query.includes('案例') || query.includes('视频')) {
    return KNOWLEDGE_BASE.works;
  }

  return "这个问题超出了我目前的知识范围，欢迎直接联系 Jesse 了解更多。";
};

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'bot',
      content: '你好！我是 Jesse 的数字分身。你可以问我关于他的职业、最近在做什么或者怎么联系他。',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: getResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="chat" className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-3 text-center text-white"
          >
            与数字分身对话
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-center text-sm md:text-base"
          >
            快速了解我的背景、技能和最近动态
          </motion.p>
        </div>

        <div className="bg-white/5 border border-red-500/20 rounded-2xl overflow-hidden flex flex-col h-[500px] md:h-[560px]">
          <ScrollArea ref={scrollRef} className="flex-1 p-4 md:p-5">
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.role === 'user' ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex items-start gap-2.5",
                      msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                      msg.role === 'user' ? "bg-red-500 text-white" : "bg-red-500/20 text-white"
                    )}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={cn(
                      "max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm md:text-base leading-relaxed",
                      msg.role === 'user'
                        ? "bg-red-500 text-white rounded-br-md"
                        : "bg-red-500/20 text-white rounded-bl-md"
                    )}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-white shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-red-500/20 px-3.5 py-2.5 rounded-xl rounded-bl-md flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-400/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-red-400/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-red-400/40 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 bg-white/5 border-t border-red-500/20">
            <div className={cn(
              "flex gap-2 relative transition-transform duration-100",
              errorShake && "translate-x-1 animate-in shake-horizontal"
            )}>
              <Input
                placeholder="问问我：你现在在做什么？"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-white/5 border-red-500/30 text-white placeholder:text-white/40 focus-visible:ring-red-500/30 h-11 rounded-xl text-sm md:text-base"
              />
              <Button
                onClick={handleSend}
                disabled={isTyping}
                className="h-11 w-11 rounded-xl p-0 bg-red-500 text-white hover:bg-red-600"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
