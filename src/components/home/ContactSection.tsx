import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactItem {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  link?: string;
}

const contactItems: ContactItem[] = [
  {
    id: 'contact-1',
    title: '私信我',
    content: '在抖音直接私信交流',
    icon: <MessageCircle className="text-red-500 w-5 h-5" />,
    link: '#'
  },
  {
    id: 'contact-2',
    title: '邮箱',
    content: 'jesse@example.com',
    icon: <Mail className="text-red-500 w-5 h-5" />,
    link: 'mailto:jesse@example.com'
  },
  {
    id: 'contact-3',
    title: '电话',
    content: '138****8888',
    icon: <Phone className="text-red-500 w-5 h-5" />,
    link: 'tel:+8613888888888'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-3 text-white"
          >
            联系我
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base"
          >
            有想法或合作？随时与我取得联系
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border-red-500/20 hover:border-red-500/40 transition-colors group">
                <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                  <div className="p-2.5 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {item.content}
                  </p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target={item.link.startsWith('mailto:') || item.link.startsWith('tel:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      {item.title === '私信我' ? '去抖音' : '联系我'}
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-red-500 text-white hover:bg-red-600 font-medium shadow-lg h-12 text-base"
            asChild
          >
            <a href="#chat">与数字分身聊天</a>
          </Button>
          <p className="mt-4 text-white/40 text-sm">
            或者通过上面的方式直接联系我
          </p>
        </motion.div>
      </div>
    </section>
  );
}