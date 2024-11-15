import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import {
  ClerkProvider
} from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import "./globals.css";
import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Repuestor",
  description: "La tienda",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en">
        <body
          className={cn(
            "font-sans antialiased",
            fontSans.variable
          )}
        >

        <Header />
        <main className="md:pt-0 pt-[var(--header-height)]">  
          {children}
          <Analytics />
        </main> 
        <Toaster richColors closeButton position="top-right"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
