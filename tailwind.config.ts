import type { Config } from "tailwindcss"
import defaultConfig from "tailwindcss/defaultConfig"
import animatePlugin from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      ...defaultConfig.theme,
  	extend: {
  		colors: {
  			'chatfuse-blue': '#2563EB',
  			'chatfuse-blue-hover': '#1D4ED8',
  			'chatfuse-blue-light': '#EFF6FF',
  			white: '#FFFFFF',
  			'text-primary': '#1A1A1A',
  			'text-secondary': '#6B7280',
  			'text-tertiary': '#9CA3AF',
        'text-logo1': '#525252',
        'text-logo': '#8b5cf6',
  			success: '#10B981',
  			warning: '#F59E0B',
  			error: '#EF4444',
  			info: '#3B82F6',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			h1: [
  				'48px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'36px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			h3: [
  				'28px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'24px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			h5: [
  				'20px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '500'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			],
  			small: [
  				'14px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			],
  			caption: [
  				'12px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '400'
  				}
  			]
  		},
  		spacing: {
  			'4': '4px',
  			'8': '8px',
  			'16': '16px',
  			'24': '24px',
  			'32': '32px',
  			'48': '48px',
  			'64': '64px'
  		},
  		borderRadius: {
  			card: '12px',
  			button: '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: '0 1px 3px rgba(0,0,0,0.1)'
  		},
  		transitionDuration: {
  			'200': '0.2s'
  		},
  		transitionTimingFunction: {
  			ease: 'ease'
  		}
  	}
  },
  plugins: [animatePlugin],
}
export default config
