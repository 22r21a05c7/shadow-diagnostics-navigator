
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(215, 25%, 27%)',
				input: 'hsl(217, 33%, 17%)',
				ring: 'hsl(215, 20%, 65%)',
				background: 'hsl(222, 47%, 11%)',
				foreground: 'hsl(214, 32%, 91%)',
				primary: {
					DEFAULT: 'hsl(198, 93%, 60%)',
					foreground: 'hsl(222, 47%, 11%)'
				},
				secondary: {
					DEFAULT: 'hsl(217, 33%, 17%)',
					foreground: 'hsl(210, 40%, 98%)'
				},
				destructive: {
					DEFAULT: 'hsl(0, 84%, 60%)',
					foreground: 'hsl(210, 40%, 98%)'
				},
				muted: {
					DEFAULT: 'hsl(217, 33%, 17%)',
					foreground: 'hsl(215, 20%, 65%)'
				},
				accent: {
					DEFAULT: 'hsl(217, 33%, 17%)',
					foreground: 'hsl(210, 40%, 98%)'
				},
				popover: {
					DEFAULT: 'hsl(222, 47%, 11%)',
					foreground: 'hsl(214, 32%, 91%)'
				},
				card: {
					DEFAULT: 'hsl(222, 47%, 11%)',
					foreground: 'hsl(214, 32%, 91%)'
				},
				sidebar: {
					DEFAULT: 'hsl(223, 47%, 11%)',
					foreground: 'hsl(214, 32%, 91%)',
					primary: 'hsl(198, 93%, 60%)',
					'primary-foreground': 'hsl(222, 47%, 11%)',
					accent: 'hsl(217, 33%, 17%)',
					'accent-foreground': 'hsl(214, 32%, 91%)',
					border: 'hsl(215, 25%, 27%)',
					ring: 'hsl(215, 20%, 65%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
