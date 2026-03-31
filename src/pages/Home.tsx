import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WorksSection } from '@/components/home/WorksSection';
import { ContactSection } from '@/components/home/ContactSection';
import { ChatSection } from '@/components/home/ChatSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/20 scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
        <ChatSection />
      </main>
      <footer className="py-10 border-t border-red-500/20 bg-black px-6 text-center text-white/40 text-sm">
        <p>© 2026 Jesse 的数字主页 | 用 AI 赋能内容创作</p>
      </footer>
    </div>
  );
}
