import React from 'react';

/**
 * 3D Cartoon Trophy for Ranking Card
 * Matches the cute bronze cup on golden pedestal with ribbon badge, cherries & sparkle
 */
export function TrophyIllustration({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Pedestal Glow */}
        <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF275" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E6A800" stopOpacity="0" />
        </radialGradient>

        {/* Cup Metallic Gradient */}
        <linearGradient id="cupBronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98A7A" />
          <stop offset="30%" stopColor="#B86252" />
          <stop offset="70%" stopColor="#8F3C2C" />
          <stop offset="100%" stopColor="#672418" />
        </linearGradient>

        {/* Cup Highlight */}
        <linearGradient id="cupHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Golden Pedestal */}
        <linearGradient id="pedestalGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#D49A00" />
        </linearGradient>

        {/* Shadow */}
        <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#8B4A00" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Golden Base Oval Ring */}
      <ellipse cx="80" cy="132" rx="52" ry="14" fill="#E6A800" />
      <ellipse cx="80" cy="128" rx="46" ry="11" fill="url(#pedestalGold)" />

      {/* Pedestal Stem */}
      <path
        d="M68 116H92L88 126H72L68 116Z"
        fill="#9A4533"
      />

      {/* Cup Base */}
      <path
        d="M62 108C62 108 66 117 80 117C94 117 98 108 98 108H62Z"
        fill="#B86252"
      />

      {/* Handles */}
      {/* Left Handle */}
      <path
        d="M48 64C40 64 36 76 40 88C43 97 52 102 62 100"
        stroke="#8F3C2C"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M48 66C42 66 39 76 42 86C45 93 52 98 60 97"
        stroke="#D98A7A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Right Handle */}
      <path
        d="M112 64C120 64 124 76 120 88C117 97 108 102 98 100"
        stroke="#8F3C2C"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M112 66C118 66 121 76 118 86C115 93 108 98 100 97"
        stroke="#D98A7A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Trophy Main Bowl */}
      <path
        d="M50 56C50 86 64 108 80 108C96 108 110 86 110 56H50Z"
        fill="url(#cupBronze)"
        filter="url(#dropShadow)"
      />

      {/* Cup Lip / Top Rim */}
      <ellipse cx="80" cy="56" rx="30" ry="8" fill="#8F3C2C" />
      <ellipse cx="80" cy="54" rx="29" ry="7" fill="#C97361" />
      <ellipse cx="80" cy="53" rx="27" ry="5.5" fill="#FFE2DC" opacity="0.6" />

      {/* Shininess Gloss on Cup */}
      <path
        d="M58 60C58 78 68 96 74 102C71 96 66 82 66 60H58Z"
        fill="white"
        opacity="0.35"
      />

      {/* Pedestal Banner "Bronze" */}
      <g transform="translate(48, 120)">
        <rect x="0" y="0" width="64" height="15" rx="7.5" fill="#FFF9DF" stroke="#D49A00" strokeWidth="1.5" />
        <text
          x="32"
          y="10.5"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="900"
          fill="#8A4E00"
          fontFamily="system-ui, sans-serif"
          fontStyle="italic"
        >
          Bronze
        </text>
      </g>

      {/* Left Cherry & Sparkle Accessory */}
      <g transform="translate(30, 78)">
        <circle cx="16" cy="18" r="14" fill="#000000" opacity="0.9" />
        <circle cx="11" cy="20" r="5" fill="#EF4444" />
        <circle cx="10" cy="19" r="1.5" fill="#FFFFFF" />
        <circle cx="19" cy="18" r="5.5" fill="#EF4444" />
        <circle cx="18" cy="17" r="1.8" fill="#FFFFFF" />
        <path d="M11 16C12 11 16 11 18 13" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sparkles */}
        <path d="M8 8L9.5 12L13.5 13.5L9.5 15L8 19L6.5 15L2.5 13.5L6.5 12L8 8Z" fill="#FACC15" />
      </g>

      {/* Upward curved arrow on right side */}
      <path
        d="M118 96C126 91 127 80 120 73"
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M124 72L119 72L121 78"
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3D Cards for Lucky Flip Card
 * One brown card behind, one bright yellow front card with fist/star icon
 */
export function FlipCardsIllustration({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="backCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A27B5C" />
          <stop offset="100%" stopColor="#6C4A2E" />
        </linearGradient>
        <linearGradient id="frontCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Back Card (Angled Caramel Brown) */}
      <g transform="translate(18, 14) rotate(-14 30 40)">
        <rect
          x="0"
          y="0"
          width="54"
          height="68"
          rx="12"
          fill="url(#backCardGrad)"
          stroke="#4F331C"
          strokeWidth="2"
        />
        <rect x="4" y="4" width="46" height="60" rx="8" stroke="#D7A87E" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </g>

      {/* Front Card (Vibrant Golden Yellow) */}
      <g transform="translate(36, 18) rotate(6 30 40)" filter="url(#cardShadow)">
        <rect
          x="0"
          y="0"
          width="56"
          height="70"
          rx="14"
          fill="url(#frontCardGrad)"
          stroke="#D97706"
          strokeWidth="2.5"
        />
        {/* Inner white glow ring */}
        <rect x="4" y="4" width="48" height="62" rx="10" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />

        {/* Hand / Fist Emblem */}
        <g transform="translate(14, 18)">
          <circle cx="14" cy="16" r="13" fill="#D97706" opacity="0.2" />
          <path
            d="M9 13C9 11.5 10 10.5 11.5 10.5C13 10.5 14 11.5 14 13V18"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M14 11C14 9.5 15 8.5 16.5 8.5C18 8.5 19 9.5 19 11V18"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M19 13C19 11.8 20 11 21 11C22 11 23 11.8 23 13V19C23 23 19 25 15 25C11 25 8 22 8 18V15C8 13.5 9 12.5 10.5 12.5"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

/**
 * 3D Fortune Wheel for Lucky Spin Card
 * Green and lime wedges with pointer & "$$" prize badge
 */
export function SpinWheelIllustration({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="wheelShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#064E3B" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Wheel Body */}
      <g transform="translate(12, 12)" filter="url(#wheelShadow)">
        {/* Outer Dark Ring */}
        <circle cx="48" cy="48" r="44" fill="#064E3B" stroke="#052E16" strokeWidth="2.5" />
        {/* Outer White Rim */}
        <circle cx="48" cy="48" r="40" fill="#FFFFFF" stroke="#047857" strokeWidth="2" />

        {/* Wedges */}
        <g transform="translate(48, 48)">
          <path d="M0 0 L0 -38 A38 38 0 0 1 32 -19 Z" fill="#4ADE80" />
          <path d="M0 0 L32 -19 A38 38 0 0 1 32 19 Z" fill="#86EFAC" />
          <path d="M0 0 L32 19 A38 38 0 0 1 0 38 Z" fill="#22C55E" />
          <path d="M0 0 L0 38 A38 38 0 0 1 -32 19 Z" fill="#4ADE80" />
          <path d="M0 0 L-32 19 A38 38 0 0 1 -32 -19 Z" fill="#86EFAC" />
          <path d="M0 0 L-32 -19 A38 38 0 0 1 0 -38 Z" fill="#22C55E" />

          {/* Pegs/Dots around rim */}
          <circle cx="0" cy="-35" r="2" fill="#047857" />
          <circle cx="30" cy="-18" r="2" fill="#047857" />
          <circle cx="30" cy="18" r="2" fill="#047857" />
          <circle cx="0" cy="35" r="2" fill="#047857" />
          <circle cx="-30" cy="18" r="2" fill="#047857" />
          <circle cx="-30" cy="-18" r="2" fill="#047857" />

          {/* Center Hub */}
          <circle cx="0" cy="0" r="10" fill="#064E3B" />
          <circle cx="0" cy="0" r="6" fill="#FACC15" />
        </g>
      </g>

      {/* Top Right "$$" Prize Badge with Red Dot */}
      <g transform="translate(68, 6)">
        <circle cx="18" cy="18" r="16" fill="#000000" />
        <circle cx="18" cy="18" r="14" fill="#FACC15" stroke="#EAB308" strokeWidth="1.5" />
        <text
          x="18"
          y="22.5"
          textAnchor="middle"
          fontSize="12"
          fontWeight="900"
          fill="#713F12"
          fontFamily="system-ui, sans-serif"
        >
          $$
        </text>
        {/* Red Berry at bottom left of prize */}
        <circle cx="8" cy="27" r="4.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
      </g>

      {/* Pointer Needle at Top */}
      <path
        d="M58 8L62 18L54 18Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * 3D Bundle of Green Banknotes / Cash for Newbie Tasks & Super Offers
 */
export function CashBundleIllustration({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="billGreen1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="billGreen2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>

      {/* Bottom bill 3 */}
      <rect
        x="6"
        y="26"
        width="48"
        height="26"
        rx="5"
        fill="#14532D"
        transform="rotate(-5 30 39)"
      />

      {/* Middle bill 2 */}
      <rect
        x="8"
        y="20"
        width="48"
        height="26"
        rx="5"
        fill="url(#billGreen1)"
        stroke="#15803D"
        strokeWidth="1.5"
        transform="rotate(3 32 33)"
      />

      {/* Top bill 1 */}
      <rect
        x="8"
        y="14"
        width="48"
        height="26"
        rx="5"
        fill="url(#billGreen2)"
        stroke="#166534"
        strokeWidth="1.5"
      />
      {/* Inner bill border */}
      <rect x="12" y="17" width="40" height="20" rx="3" stroke="#DCFCE7" strokeWidth="1" opacity="0.8" />
      {/* Center circle */}
      <circle cx="32" cy="27" r="5.5" fill="#DCFCE7" opacity="0.9" />
      <text
        x="32"
        y="30"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="#15803D"
      >
        ★
      </text>

      {/* Paper Band Strap */}
      <rect x="27" y="13" width="10" height="28" rx="2" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
    </svg>
  );
}

/**
 * 3D Golden Treasure Chest with glowing countdown underneath
 */
export function TreasureChestIllustration({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="chestGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </radialGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Glow Behind */}
      <circle cx="40" cy="40" r="34" fill="url(#chestGlow)" opacity="0.4" />

      {/* Chest Base */}
      <rect
        x="16"
        y="38"
        width="48"
        height="26"
        rx="6"
        fill="url(#goldGradient)"
        stroke="#78350F"
        strokeWidth="2.5"
      />

      {/* Chest Lid */}
      <path
        d="M14 38C14 26 24 18 40 18C56 18 66 26 66 38H14Z"
        fill="url(#goldGradient)"
        stroke="#78350F"
        strokeWidth="2.5"
      />

      {/* Metal Bands */}
      <path d="M26 19.5V63" stroke="#B45309" strokeWidth="3" />
      <path d="M54 19.5V63" stroke="#B45309" strokeWidth="3" />

      {/* Center Lock / Keyhole Plate */}
      <rect x="33" y="32" width="14" height="15" rx="3" fill="#FEF08A" stroke="#78350F" strokeWidth="2" />
      <circle cx="40" cy="37" r="2" fill="#78350F" />
      <path d="M40 37V42" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Top Sparkles */}
      <path d="M62 14L63.5 17L66.5 18.5L63.5 20L62 23L60.5 20L57.5 18.5L60.5 17L62 14Z" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Circular Mini Wheel Avatar with 100 Free Spin Ribbon for the floating speech bubble
 */
export function MiniWheelAvatar({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Glow */}
      <circle cx="30" cy="27" r="23" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

      {/* Colorful Wheel Wedges */}
      <g transform="translate(30, 27)">
        <path d="M0 0 L0 -19 A19 19 0 0 1 16 -10 Z" fill="#EF4444" />
        <path d="M0 0 L16 -10 A19 19 0 0 1 16 10 Z" fill="#F59E0B" />
        <path d="M0 0 L16 10 A19 19 0 0 1 0 19 Z" fill="#10B981" />
        <path d="M0 0 L0 19 A19 19 0 0 1 -16 10 Z" fill="#3B82F6" />
        <path d="M0 0 L-16 10 A19 19 0 0 1 -16 -10 Z" fill="#8B5CF6" />
        <path d="M0 0 L-16 -10 A19 19 0 0 1 0 -19 Z" fill="#EC4899" />
        <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
      </g>

      {/* "100" Green Ribbon at Bottom */}
      <g transform="translate(10, 42)">
        <rect x="0" y="0" width="40" height="14" rx="4" fill="#15803D" stroke="#FFFFFF" strokeWidth="1" />
        <text
          x="20"
          y="10"
          textAnchor="middle"
          fontSize="8"
          fontWeight="900"
          fill="#FFFFFF"
          fontFamily="system-ui, sans-serif"
        >
          100 FREE
        </text>
      </g>
    </svg>
  );
}
