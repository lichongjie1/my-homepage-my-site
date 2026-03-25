import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ChatSection } from '@/components/home/ChatSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ChatSection />
      </main>
      <footer className="py-12 border-t border-border bg-secondary/10 px-6 text-center text-muted-foreground text-sm">
        <p>© 2026 Jesse 的数字主页 | 用 AI 赋能内容创作</p>
      </footer>
    </div>
  );
}
