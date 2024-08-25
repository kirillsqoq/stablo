"use client";

import { ThemeProvider } from "next-themes";
import {NextUIProvider} from '@nextui-org/react'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {/* <NextUIProvider attribute="class" defaultTheme="light"> */}
      {children}
      {/* </NextUIProvider> */}
    </ThemeProvider> 
  );
}
