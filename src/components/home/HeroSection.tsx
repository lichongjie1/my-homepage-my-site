import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function HeroSection() {
  const avatarUrl = "https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_4f32e9cf-ec82-4530-a346-4e74b9f7c921.jpg";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-background to-background">
      {/* Decorative background effects */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-2 border-primary/20 bg-background/50 backdrop-blur-sm relative z-10 shadow-2xl">
            <AvatarImage src={avatarUrl} alt="Jesse" className="object-cover" />
            <AvatarFallback className="text-4xl bg-primary/10 text-primary">J</AvatarFallback>
          </Avatar>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
        >
          Jesse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10"
        >
          一个正在学习用 AI 做产品的抖音内容策划
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            asChild
          >
            <a href="#chat">与我的分身聊聊</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm"
            asChild
          >
            <a href="#about">了解更多</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
