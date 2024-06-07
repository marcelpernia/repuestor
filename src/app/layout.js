import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Repuestor",
  description: "La tienda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <Header />
      <main className="md:pt-0 pt-[var(--header-height)]">  
        {children}
      </main> 
        
      </body>
    </html>
  );
}
