import React from "react"

interface NeonWaveProps {
  top: string
  color: "pink" | "cyan" | "orange" | "magenta"
  opacity?: number
}

function NeonWave({ top, color, opacity = 0.45 }: NeonWaveProps) {
  const colorMap = {
    pink: "var(--color-neon-pink)",
    cyan: "var(--color-neon-cyan)",
    orange: "var(--color-neon-orange)",
    magenta: "var(--color-neon-magenta)",
  }
  const strokeColor = colorMap[color] || colorMap.pink

  return (
    <div
      className="absolute left-0 right-0 w-full overflow-hidden pointer-events-none -z-15"
      style={{ top, height: "260px" }}
    >
      <svg
        className="w-[120%] h-full"
        style={{ marginLeft: "-10%", opacity }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1 - Primary solid neon wave */}
        <path
          d="M 0,100 C 150,50 300,150 450,100 C 600,50 750,150 900,100 C 1050,50 1200,150 1350,100"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          className="animate-neon-wave-1"
          style={{
            filter: `drop-shadow(0 0 10px ${strokeColor}) drop-shadow(0 0 3px ${strokeColor})`,
          }}
        />
        {/* Wave 2 - Secondary dashed digital wave */}
        <path
          d="M 0,120 C 150,160 300,80 450,120 C 600,160 750,80 900,120 C 1050,160 1200,80 1350,120"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-neon-wave-2"
          style={{
            filter: `drop-shadow(0 0 6px ${strokeColor})`,
          }}
        />
      </svg>
    </div>
  )
}

interface NeonWireframeProps {
  top: string
  left?: string
  right?: string
  color: "pink" | "cyan" | "orange"
}

function NeonWireframe({ top, left, right, color }: NeonWireframeProps) {
  const colorMap = {
    pink: "var(--color-neon-pink)",
    cyan: "var(--color-neon-cyan)",
    orange: "var(--color-neon-orange)",
  }
  const strokeColor = colorMap[color] || colorMap.pink

  return (
    <div
      className="absolute -z-15 pointer-events-none opacity-20"
      style={{ top, left, right, width: "160px", height: "160px" }}
    >
      <svg
        className="w-full h-full animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(0 0 6px ${strokeColor})` }}
      >
        <circle cx="50" cy="50" r="45" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="30" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="15" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="6 6" />
        <line x1="50" y1="5" x2="50" y2="95" stroke={strokeColor} strokeWidth="1" />
        <line x1="5" y1="50" x2="95" y2="50" stroke={strokeColor} strokeWidth="1" />
        <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" stroke={strokeColor} strokeWidth="0.75" />
        <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" stroke={strokeColor} strokeWidth="0.75" />
      </svg>
    </div>
  )
}

export function NeonPageBg() {
  return (
    <div 
      className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none min-h-full w-full"
      style={{
        background: "linear-gradient(to bottom, #05000b 0%, #120117 15%, #260421 35%, #1b0222 55%, #0f0119 75%, #05000a 100%)"
      }}
    >
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
          transform-origin: 50px 50px;
        }
      `}</style>

      {/* 1. Global Subtle Grid System */}
      <div className="absolute inset-0 -z-20 bg-matrix-grid opacity-45" />
      <div className="absolute inset-0 -z-20 bg-dot-matrix opacity-35" />

      {/* 2. Soft Ambient Sunset Sky Orbs (Accents & Warmth) */}
      {/* Hero Section Sunset Glow */}
      <div className="absolute top-[2%] left-[50%] -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-neon-orange/20 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[6%] left-[35%] -z-10 h-[600px] w-[600px] rounded-full bg-neon-pink/15 blur-[140px] pointer-events-none animate-float-reverse" />
      
      {/* Inside Section Glow */}
      <div className="absolute top-[20%] left-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-neon-magenta/12 blur-[130px] pointer-events-none animate-float-slow" />

      {/* Line-up Section Sunset Glow */}
      <div className="absolute top-[34%] left-[10%] -z-10 h-[550px] w-[550px] rounded-full bg-neon-coral/14 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[38%] right-[5%] -z-10 h-[650px] w-[650px] rounded-full bg-neon-orange/10 blur-[150px] pointer-events-none animate-float-reverse" />

      {/* Tickets Section Sunset Glow */}
      <div className="absolute top-[64%] left-[50%] -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-neon-magenta/15 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[60%] left-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-neon-cyan/8 blur-[130px] pointer-events-none animate-float-reverse" />

      {/* FAQ & Footer Section Sunset Glow */}
      <div className="absolute top-[82%] left-[15%] -z-10 h-[550px] w-[550px] rounded-full bg-neon-pink/14 blur-[135px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[88%] right-[15%] -z-10 h-[600px] w-[600px] rounded-full bg-neon-cyan/8 blur-[140px] pointer-events-none animate-float-reverse" />

      {/* 3. Synthwave Horizon Perspective Grid behind Hero (top-[12%]) */}
      <div className="absolute top-[12%] left-0 right-0 h-[380px] w-full -z-10 overflow-hidden pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-neon-cyan)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-neon-pink)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="horizon-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(236,72,153,0.18)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Horizon glow */}
          <rect x="0" y="0" width="1000" height="300" fill="url(#horizon-fade)" />
          
          {/* Grid lines */}
          <g stroke="url(#grid-fade)" strokeWidth="1.5">
            {/* Horizontal grid lines with progressive spacing */}
            <line x1="0" y1="120" x2="1000" y2="120" strokeOpacity="0.8" />
            <line x1="0" y1="130" x2="1000" y2="130" strokeOpacity="0.8" />
            <line x1="0" y1="145" x2="1000" y2="145" strokeOpacity="0.7" />
            <line x1="0" y1="165" x2="1000" y2="165" strokeOpacity="0.6" />
            <line x1="0" y1="190" x2="1000" y2="190" strokeOpacity="0.5" />
            <line x1="0" y1="220" x2="1000" y2="220" strokeOpacity="0.4" />
            <line x1="0" y1="255" x2="1000" y2="255" strokeOpacity="0.3" />
            <line x1="0" y1="300" x2="1000" y2="300" strokeOpacity="0.2" />
            
            {/* Perspective lines meeting at center horizon (500, 110) */}
            <line x1="500" y1="110" x2="-200" y2="300" />
            <line x1="500" y1="110" x2="0" y2="300" />
            <line x1="500" y1="110" x2="200" y2="300" />
            <line x1="500" y1="110" x2="350" y2="300" />
            <line x1="500" y1="110" x2="450" y2="300" />
            <line x1="500" y1="110" x2="550" y2="300" />
            <line x1="500" y1="110" x2="650" y2="300" />
            <line x1="500" y1="110" x2="800" y2="300" />
            <line x1="500" y1="110" x2="1000" y2="300" />
            <line x1="500" y1="110" x2="1200" y2="300" />
          </g>
        </svg>
      </div>

      {/* 4. Swaying Neon Palm Trees (Distributed down the page) */}
      {/* Palm Tree 1: Left, top-[12%] */}
      <div className="absolute top-[12%] left-[1%] -z-10 text-neon-pink opacity-[0.45] pointer-events-none hidden lg:block animate-sway">
        <svg
          viewBox="0 0 100 100"
          className="h-[280px] w-[280px] fill-none stroke-current stroke-[1.8] stroke-linecap-round"
          style={{ filter: "drop-shadow(0 0 10px var(--color-neon-pink)) drop-shadow(0 0 3px var(--color-neon-pink))" }}
        >
          <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
        </svg>
      </div>

      {/* Palm Tree 2: Right, top-[36%] */}
      <div
        className="absolute top-[36%] right-[1%] -z-10 opacity-[0.45] text-neon-cyan pointer-events-none hidden lg:block animate-sway"
        style={{ animationDelay: "-3s" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-[320px] w-[320px] fill-none stroke-current stroke-[1.8] stroke-linecap-round transform scale-x-[-1]"
          style={{ filter: "drop-shadow(0 0 10px var(--color-neon-cyan)) drop-shadow(0 0 3px var(--color-neon-cyan))" }}
        >
          <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
        </svg>
      </div>

      {/* Palm Tree 3: Left, top-[62%] */}
      <div
        className="absolute top-[62%] left-[2%] -z-10 opacity-[0.4] text-neon-coral pointer-events-none hidden lg:block animate-sway"
        style={{ animationDelay: "-6s" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-[300px] w-[300px] fill-none stroke-current stroke-[1.8] stroke-linecap-round"
          style={{ filter: "drop-shadow(0 0 10px var(--color-neon-coral)) drop-shadow(0 0 3px var(--color-neon-coral))" }}
        >
          <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
        </svg>
      </div>

      {/* Palm Tree 4: Right, top-[84%] */}
      <div
        className="absolute top-[84%] right-[2%] -z-10 opacity-[0.45] text-neon-pink pointer-events-none hidden lg:block animate-sway"
        style={{ animationDelay: "-2s" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="h-[290px] w-[290px] fill-none stroke-current stroke-[1.8] stroke-linecap-round transform scale-x-[-1]"
          style={{ filter: "drop-shadow(0 0 10px var(--color-neon-pink)) drop-shadow(0 0 3px var(--color-neon-pink))" }}
        >
          <path d="M10 90 Q 30 50 60 40 M60 40 Q 40 30 20 40 M60 40 Q 50 15 30 20 M60 40 Q 70 10 55 5 M60 40 Q 80 20 85 45 M60 40 Q 80 50 70 70 M60 40 Q 65 60 50 80" />
        </svg>
      </div>

      {/* 5. Glowing Cyber Geometrics/Wireframes */}
      <NeonWireframe top="28%" right="8%" color="cyan" />
      <NeonWireframe top="70%" left="5%" color="pink" />

      {/* 6. Glowing Neon Wave Lines along the page */}
      <NeonWave top="8%" color="pink" opacity={0.4} />
      <NeonWave top="20%" color="cyan" opacity={0.42} />
      <NeonWave top="38%" color="orange" opacity={0.38} />
      <NeonWave top="64%" color="magenta" opacity={0.36} />
      <NeonWave top="80%" color="cyan" opacity={0.38} />
      <NeonWave top="90%" color="pink" opacity={0.4} />
    </div>
  )
}
