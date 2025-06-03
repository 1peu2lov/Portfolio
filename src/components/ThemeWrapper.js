'use client';

import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  )
} 