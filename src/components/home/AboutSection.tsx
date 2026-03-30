import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, Zap } from 'lucide-react';

const personalInfo = [
  {
    title: '目前在做',
    content: '想用 AI 做一些抖音内容',
    icon: <Sparkles className="text-red-500 w-5 h-5" />,
    description: '专注于将前沿 AI 技术与短视频内容深度结合，探索内容创作的新边界。'
  },
  {
    title: '兴趣方向',
    content: 'AI 应用、健身',
    icon: <Heart className="text-red-400 w-5 h-5" />,
    description: '在技术研究之余，也注重身心平衡，追求高效的训练与健康的生活方式。'
  },
  {
    title: '个人特点',
    content: '喜欢把复杂的问题简单化',
    icon: <Zap className="text-red-400 w-5 h-5" />,
    description: '擅长从纷繁的信息中提取核心，以最通俗易懂的方式传达复杂的逻辑。'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-3 text-white"
          >
            关于我
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base"
          >
            了解更多关于我的信息
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {personalInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                  <div className="p-2.5 bg-red-500/20 rounded-lg">
                    {item.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base font-medium text-white mb-2">
                    {item.content}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
