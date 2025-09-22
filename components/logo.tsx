interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        {/* Left circle */}
        <circle cx="15" cy="20" r="12" fill="url(#leftGradient)" opacity="0.9" />
        {/* Right circle */}
        <circle cx="25" cy="20" r="12" fill="url(#rightGradient)" opacity="0.9" />
      </svg>
    </div>
  )
}
