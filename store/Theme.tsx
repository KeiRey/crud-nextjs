'use client'

import Layouts from '@/components/layouts'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';


export default function ThemeProviderContext({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MantineProvider defaultColorScheme="auto">
        <Layouts>{children}</Layouts>
      </MantineProvider>
    </ThemeProvider>
  )
}
