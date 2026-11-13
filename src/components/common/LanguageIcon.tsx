import React from 'react';
import { 
  Zap, 
  Terminal, 
  ShieldCheck, 
  Database, 
  Code2, 
  Palette, 
  Layers, 
  Server, 
  GitBranch, 
  Cpu, 
  Box 
} from 'lucide-react';
import { Language } from '../../types';

interface LanguageIconProps {
  language: Language | string;
  className?: string;
}

export const LanguageIcon: React.FC<LanguageIconProps> = ({ language, className = 'w-4 h-4' }) => {
  switch (language) {
    case 'javascript':
      return <Zap className={`${className} text-amber-400`} />;
    case 'python':
      return <Terminal className={`${className} text-emerald-400`} />;
    case 'typescript':
      return <ShieldCheck className={`${className} text-indigo-400`} />;
    case 'sql':
      return <Database className={`${className} text-cyan-400`} />;
    case 'html':
      return <Code2 className={`${className} text-orange-400`} />;
    case 'css':
      return <Palette className={`${className} text-blue-400`} />;
    case 'react':
      return <Layers className={`${className} text-cyan-400`} />;
    case 'nodejs':
      return <Server className={`${className} text-green-400`} />;
    case 'git':
      return <GitBranch className={`${className} text-rose-400`} />;
    case 'dsa':
      return <Cpu className={`${className} text-purple-400`} />;
    case 'docker':
      return <Box className={`${className} text-sky-400`} />;
    case 'bash':
      return <Terminal className={`${className} text-teal-400`} />;
    case 'golang':
      return <Cpu className={`${className} text-cyan-300`} />;
    case 'rust':
      return <ShieldCheck className={`${className} text-orange-500`} />;
    default:
      return <Code2 className={`${className} text-slate-400`} />;
  }
};
