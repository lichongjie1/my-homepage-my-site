import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  const avatarUrl = "https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_4f32e9cf-ec82-4530-a346-4e74b9f7c921.jpg";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 px-6 overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="relative mb-6">
          <Avatar className="w-28 h-28 md:w-36 md:h-36 border-2 border-red-500/30 bg-black relative z-10">
            <AvatarImage src={avatarUrl} alt="Jesse" className="object-cover" />
            <AvatarFallback className="text-3xl bg-red-500/20 text-white">J</AvatarFallback>
          </Avatar>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3"
        >
          Jesse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-base md:text-lg text-white/60 max-w-md leading-relaxed mb-8"
        >
          抖音内容策划 · AI 产品探索者
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-red-500 text-white hover:bg-red-600 font-medium shadow-lg h-12 text-base"
            asChild
          >
            <a href="#chat">与数字分身聊天</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:text-white h-12 text-base"
            asChild
          >
            <a href="#about">了解更多</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-5 h-8 border border-red-500/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-red-500/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
