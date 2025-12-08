import React from 'react';
import { Twitter, Facebook } from 'lucide-react';
export function Footer() {
  const links = [{
    label: 'ABOUT US',
    href: '#'
  }, {
    label: 'SUPPORT',
    href: '#'
  }, {
    label: 'PRIVACY',
    href: '#'
  }, {
    label: 'TERMS',
    href: '#'
  }, {
    label: 'BLOG',
    href: '#'
  }, {
    label: 'TWITTER',
    href: '#'
  }, {
    label: 'FACEBOOK',
    href: '#'
  }];
  return <footer className="w-full py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-gray-500 font-medium uppercase">
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
          {links.map(link => <a key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">
              {link.label}
            </a>)}
        </nav>

        <div className="flex items-center gap-1">
          <span>&copy; QPOLL</span>
        </div>
      </div>
    </footer>;
}