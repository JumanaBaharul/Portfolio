import React from 'react';

const baseSvgProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 48 48',
  role: 'img',
  'aria-hidden': true,
};

const iconRenderers = {
  python: () => (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="python-a" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3776ab" />
          <stop offset="100%" stopColor="#ffd43b" />
        </linearGradient>
      </defs>
      <path
        fill="url(#python-a)"
        d="M24 4c-7 0-8 5-8 5v6h8v4H12s-8-.8-8 8 6 9 6 9h7v-5s-.2-6 6-6 6 6 6 6v5h7s6-.8 6-9-8-8-8-8h-4v-4h8V9s-1-5-8-5h-4z"
      />
    </svg>
  ),
  java: () => (
    <svg {...baseSvgProps}>
      <path fill="#f89820" d="M24 6s-4 4-4 7 4 5 4 5 4-2 4-5-4-7-4-7z" />
      <path
        fill="none"
        stroke="#5382a1"
        strokeWidth="3"
        strokeLinecap="round"
        d="M16 34c4 4 12 4 16 0"
      />
      <ellipse cx="24" cy="38" rx="10" ry="3" fill="#5382a1" opacity="0.35" />
    </svg>
  ),
  c: () => (
    <svg {...baseSvgProps}>
      <circle cx="24" cy="24" r="20" fill="#283593" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        d="M32 16a10 10 0 100 16"
      />
    </svg>
  ),
  javascript: () => (
    <svg {...baseSvgProps}>
      <rect width="40" height="40" x="4" y="4" rx="6" fill="#f7df1e" />
      <text x="14" y="32" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="18" fill="#2d2d2d">
        JS
      </text>
    </svg>
  ),
  leetcode: () => (
    <svg {...baseSvgProps}>
      <path
        fill="none"
        stroke="#f89f1b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30 12L18 24l12 12"
      />
      <circle cx="32" cy="24" r="6" fill="#2d2d2d" />
    </svg>
  ),
  numpy: () => (
    <svg {...baseSvgProps}>
      <rect x="8" y="10" width="10" height="10" fill="#4d77cf" />
      <rect x="20" y="10" width="10" height="10" fill="#4d77cf" opacity="0.75" />
      <rect x="14" y="22" width="10" height="10" fill="#4d77cf" opacity="0.6" />
      <rect x="26" y="22" width="10" height="10" fill="#4d77cf" opacity="0.4" />
    </svg>
  ),
  pandas: () => (
    <svg {...baseSvgProps}>
      <rect x="14" y="10" width="6" height="28" rx="3" fill="#130754" />
      <rect x="24" y="10" width="6" height="28" rx="3" fill="#8c1eff" opacity="0.8" />
      <circle cx="17" cy="16" r="2" fill="#8c1eff" />
      <circle cx="27" cy="32" r="2" fill="#130754" />
    </svg>
  ),
  'scikit-learn': () => (
    <svg {...baseSvgProps}>
      <circle cx="20" cy="24" r="12" fill="#f89939" />
      <circle cx="30" cy="24" r="8" fill="#2a6ab1" opacity="0.8" />
    </svg>
  ),
  keras: () => (
    <svg {...baseSvgProps}>
      <rect x="8" y="8" width="32" height="32" rx="6" fill="#d00000" />
      <text x="19" y="32" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="20" fill="#fff">
        K
      </text>
    </svg>
  ),
  pytorch: () => (
    <svg {...baseSvgProps}>
      <path
        d="M28 8l6 6c5 5 5 13 0 18s-13 5-18 0-5-13 0-18l6-6"
        fill="none"
        stroke="#ee4c2c"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="30" cy="12" r="3" fill="#ee4c2c" />
    </svg>
  ),
  cnns: () => (
    <svg {...baseSvgProps}>
      <circle cx="16" cy="16" r="5" fill="#6c63ff" />
      <circle cx="32" cy="16" r="5" fill="#78ffe0" />
      <circle cx="24" cy="32" r="5" fill="#ff6584" />
      <path stroke="#78ffe0" strokeWidth="3" d="M16 16L24 32L32 16" fill="none" strokeLinecap="round" />
    </svg>
  ),
  rnns: () => (
    <svg {...baseSvgProps}>
      <path
        d="M14 16c0-6 20-6 20 0s-6 6-10 6 10 0 10 6-20 6-20 0"
        fill="none"
        stroke="#5a6dff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
  lstms: () => (
    <svg {...baseSvgProps}>
      <rect x="12" y="12" width="24" height="6" rx="3" fill="#50c4f5" />
      <rect x="12" y="21" width="24" height="6" rx="3" fill="#50c4f5" opacity="0.75" />
      <rect x="12" y="30" width="24" height="6" rx="3" fill="#50c4f5" opacity="0.5" />
    </svg>
  ),
  'transfer-learning': () => (
    <svg {...baseSvgProps}>
      <path
        d="M14 18h14l-4-4"
        fill="none"
        stroke="#78ffe0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30H20l4 4"
        fill="none"
        stroke="#5a6dff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  efficientnet: () => (
    <svg {...baseSvgProps}>
      <rect x="12" y="12" width="24" height="24" rx="6" fill="#00b894" opacity="0.2" />
      <path
        d="M18 30l6-12 6 12"
        fill="none"
        stroke="#00b894"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="18" r="3" fill="#00b894" />
    </svg>
  ),
  transformers: () => (
    <svg {...baseSvgProps}>
      <polygon points="24,6 38,15 38,33 24,42 10,33 10,15" fill="#3d5afe" />
      <path d="M18 20l6 4 6-4v8l-6 4-6-4z" fill="#fff" opacity="0.7" />
    </svg>
  ),
  'hugging-face': () => (
    <svg {...baseSvgProps}>
      <circle cx="20" cy="24" r="12" fill="#ffdd67" />
      <circle cx="18" cy="22" r="2" fill="#664e27" />
      <circle cx="26" cy="22" r="2" fill="#664e27" />
      <path d="M16 28c2 3 6 3 8 0" fill="none" stroke="#664e27" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="30" r="6" fill="#fff176" opacity="0.6" />
    </svg>
  ),
  'gpt-models': () => (
    <svg {...baseSvgProps}>
      <circle cx="24" cy="24" r="18" fill="#0a1929" />
      <path
        d="M24 10l8 5v8l-8 5-8-5v-8z"
        fill="none"
        stroke="#64ffda"
        strokeWidth="3"
      />
      <path d="M16 30l8 5 8-5" fill="none" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  tableau: () => (
    <svg {...baseSvgProps}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#1f3c88" opacity="0.15" />
      <g stroke="#1f3c88" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="12" x2="24" y2="36" />
        <line x1="12" y1="24" x2="36" y2="24" />
        <line x1="18" y1="16" x2="18" y2="32" />
        <line x1="30" y1="16" x2="30" y2="32" />
      </g>
    </svg>
  ),
  matplotlib: () => (
    <svg {...baseSvgProps}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#0d47a1" opacity="0.15" />
      <polyline
        points="14,30 20,22 26,26 32,16"
        fill="none"
        stroke="#0d47a1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="16" r="3" fill="#0d47a1" />
    </svg>
  ),
  seaborn: () => (
    <svg {...baseSvgProps}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#2b6cb0" opacity="0.15" />
      <path
        d="M14 30c4-8 8-8 12 0s8 8 12 0"
        fill="none"
        stroke="#2b6cb0"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  html5: () => (
    <svg {...baseSvgProps}>
      <path d="M12 6h24l-3 30-9 6-9-6z" fill="#e44d26" />
      <path d="M24 38l7-4 2-22H24z" fill="#f16529" />
      <path d="M24 24h-8l1 10 7 4z" fill="#fff" opacity="0.8" />
    </svg>
  ),
  css3: () => (
    <svg {...baseSvgProps}>
      <path d="M12 6h24l-3 30-9 6-9-6z" fill="#264de4" />
      <path d="M24 38l7-4 2-22H24z" fill="#2965f1" />
      <path d="M24 24h8l-1 8-7 4z" fill="#fff" opacity="0.85" />
    </svg>
  ),
  react: () => (
    <svg {...baseSvgProps}>
      <circle cx="24" cy="24" r="4" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="3" fill="none">
        <ellipse cx="24" cy="24" rx="16" ry="8" />
        <ellipse cx="24" cy="24" rx="16" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="16" ry="8" transform="rotate(120 24 24)" />
      </g>
    </svg>
  ),
  'node.js': () => (
    <svg {...baseSvgProps}>
      <polygon points="24,6 38,14 38,30 24,38 10,30 10,14" fill="#539e43" />
      <text x="19" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="14" fill="#fff">
        JS
      </text>
    </svg>
  ),
  'express.js': () => (
    <svg {...baseSvgProps}>
      <rect x="10" y="14" width="28" height="20" rx="10" fill="#111" />
      <text x="24" y="28" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="12" fill="#fff" textAnchor="middle">
        ex
      </text>
    </svg>
  ),
  mysql: () => (
    <svg {...baseSvgProps}>
      <path
        d="M12 30c8-2 12-18 24-18-2 6-2 12 4 18"
        fill="none"
        stroke="#00618a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M28 14c4-2 8-2 8-2" stroke="#e48e00" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  ),
  postgresql: () => (
    <svg {...baseSvgProps}>
      <path d="M24 8c-8 0-14 6-12 18 2 10 12 14 12 14s10-4 12-14c2-12-4-18-12-18z" fill="#336791" />
      <path d="M18 22c4 2 8 2 12 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  mongodb: () => (
    <svg {...baseSvgProps}>
      <path d="M24 6s-12 12-6 30l6 6 6-6c6-18-6-30-6-30z" fill="#4caf50" />
      <path d="M24 12v22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  git: () => (
    <svg {...baseSvgProps}>
      <path d="M12 24l12-12 12 12-12 12z" fill="#f34f29" />
      <path d="M24 12v24" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="#fff" />
    </svg>
  ),
  postman: () => (
    <svg {...baseSvgProps}>
      <circle cx="24" cy="24" r="18" fill="#ff6c37" />
      <path d="M16 24h16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 20l8 8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  'vs-code': () => (
    <svg {...baseSvgProps}>
      <rect x="10" y="10" width="28" height="28" rx="6" fill="#1a73e8" opacity="0.2" />
      <path d="M18 16l8-6v28l-8-6-6 6-4-4 6-6-6-6 4-4z" fill="#1a73e8" />
    </svg>
  ),
};

const SkillIcon = ({ name }) => {
  const renderer = iconRenderers[name];
  if (renderer) {
    return renderer();
  }

  return (
    <svg {...baseSvgProps}>
      <circle cx="24" cy="24" r="18" fill="#5a6dff" opacity="0.2" />
      <text
        x="24"
        y="29"
        fontFamily="'Inter', sans-serif"
        fontWeight="600"
        fontSize="14"
        fill="#5a6dff"
        textAnchor="middle"
      >
        {name?.charAt(0) ?? '?'}
      </text>
    </svg>
  );
};

export default SkillIcon;
