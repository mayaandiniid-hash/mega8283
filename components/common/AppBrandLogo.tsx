import React from 'react';

interface AppBrandLogoProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function AppBrandLogo({ name, className = '', size = 'md' }: AppBrandLogoProps) {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs rounded-xl',
    md: 'w-10 h-10 text-sm rounded-2xl',
    lg: 'w-12 h-12 text-base rounded-2xl',
    xl: 'w-16 h-16 text-xl rounded-3xl',
  };

  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Render authentic SVG icons with brand gradients
  if (normalized.includes('capcut')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-black flex items-center justify-center p-2 text-white shadow-sm shrink-0 ${className}`}
        title="CapCut"
        aria-label="CapCut"
      >
        <svg viewBox="0 0 40 40" fill="currentColor" className="w-full h-full">
          {/* CapCut dual interlocking bowtie ribbon */}
          <path d="M6 14L20 22L6 30V14Z" fill="white" />
          <path d="M34 14L20 22L34 30V14Z" fill="white" />
          <circle cx="20" cy="22" r="3.5" fill="black" />
          <circle cx="20" cy="22" r="1.5" fill="white" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('canva')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-tr from-[#00C4CC] via-[#7D2AE8] to-[#9900EF] flex items-center justify-center p-1.5 text-white shadow-sm shrink-0 ${className}`}
        title="Canva"
        aria-label="Canva"
      >
        <span className="font-serif italic font-bold tracking-tight text-white select-none text-[1.1em]">
          C
        </span>
      </div>
    );
  }

  if (normalized.includes('alight')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-[#00DF82] via-[#039855] to-[#046C4E] flex items-center justify-center p-2 text-white shadow-sm shrink-0 ${className}`}
        title="Alight Motion"
        aria-label="Alight Motion"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
          <path d="M4 12c4-8 12-8 16 0-4 8-12 8-16 0z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('spotify')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-[#1DB954] flex items-center justify-center p-2 text-black shadow-sm shrink-0 ${className}`}
        title="Spotify"
        aria-label="Spotify"
      >
        <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.794-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.496 9.723 1.114.294.18.387.562.207.856zm1.224-2.724c-.227.368-.71.485-1.078.257-2.69-1.653-6.79-2.131-9.97-1.165-.413.125-.85-.106-.975-.518-.125-.413.106-.85.518-.975 3.633-1.103 8.147-.568 11.248 1.323.368.227.485.71.257 1.078zm.105-2.835C14.692 8.95 8.08 8.73 4.708 9.754c-.496.15-1.022-.132-1.173-.628-.151-.496.132-1.022.628-1.173 3.943-1.197 11.233-.943 15.05 1.326.446.265.592.842.327 1.288-.265.446-.842.592-1.288.327z" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('netflix')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-black flex items-center justify-center p-1.5 text-[#E50914] shadow-sm shrink-0 ${className}`}
        title="Netflix"
        aria-label="Netflix"
      >
        <span className="font-sans font-black tracking-tighter text-[#E50914] select-none text-[1.2em]">
          N
        </span>
      </div>
    );
  }

  if (normalized.includes('youtube')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-[#FF0000] flex items-center justify-center p-2 text-white shadow-sm shrink-0 ${className}`}
        title="YouTube"
        aria-label="YouTube"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('chatgpt')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-[#10A37F] flex items-center justify-center p-2 text-white shadow-sm shrink-0 ${className}`}
        title="ChatGPT"
        aria-label="ChatGPT"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-full h-full">
          <path d="M12 2a4 4 0 0 0-4 4v2H6a4 4 0 0 0-4 4 4 4 0 0 0 4 4h2v2a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-2h2a4 4 0 0 0 4-4 4 4 0 0 0-4-4h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('gemini')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-tr from-[#1B72E8] via-[#7B1FA2] to-[#EA4335] flex items-center justify-center p-1.5 text-white shadow-sm shrink-0 ${className}`}
        title="Google Gemini"
        aria-label="Google Gemini"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>
    );
  }

  if (normalized.includes('picsart')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-tr from-[#FC2D6A] via-[#B832FF] to-[#397BFF] flex items-center justify-center p-2 text-white shadow-sm shrink-0 ${className}`}
        title="Picsart"
        aria-label="Picsart"
      >
        <span className="font-black italic tracking-tighter text-white select-none text-[1.1em]">
          P
        </span>
      </div>
    );
  }

  if (normalized.includes('lightroom') || normalized.includes('adobe')) {
    return (
      <div
        className={`${sizeClasses[size]} bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center p-1 text-[#31A8FF] shadow-sm shrink-0 ${className}`}
        title="Adobe Lightroom"
        aria-label="Adobe Lightroom"
      >
        <span className="font-sans font-bold tracking-tight text-[#31A8FF] select-none text-[0.85em]">
          Lr
        </span>
      </div>
    );
  }

  // Fallback graceful icon
  return (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold shadow-sm shrink-0 ${className}`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}
