import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Play, Image } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  link?: string;
}

const works: WorkItem[] = [
  {
    id: 'work-1',
    title: '抖音AI内容策划',
    description: '使用AI工具创作短视频内容，探索算法推荐机制',
    category: '内容创作',
    icon: <Play className="text-red-500 w-5 h-5" />,
    link: '#'
  },
  {
    id: 'work-2',
    title: '个人主页设计',
    description: '基于React和Tailwind CSS构建的现代化个人主页',
    category: '前端开发',
    icon: <ExternalLink className="text-red-500 w-5 h-5" />,
    link: '#'
  },
  {
    id: 'work-3',
    title: 'AI应用案例集',
    description: '整理和分享AI在内容创作中的实际应用案例',
    category: '知识分享',
    icon: <Image className="text-red-500 w-5 h-5" />,
    link: '#'
  }
];

export function WorksSection() {
  return (
    <section id="works" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-3 text-white"
          >
            我的作品
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base"
          >
            探索我近期的项目和创作
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border-red-500/20 hover:border-red-500/40 transition-colors group">
                <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                  <div className="p-2.5 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    {work.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">{work.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-red-400 mb-2 font-medium">{work.category}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  {work.link && (
                    <a 
                      href={work.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      查看详情
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}