import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, DM_Mono } from "next/font/google";
import { Splash } from "@/components/Splash";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orée Conseil · AI consulting for Quebec SMEs and regulated practices",
  description:
    "Orée helps Quebec SMEs and regulated professional practices take ownership of AI by first diagnosing what actually slows the work down. L'IA rédige. L'humain décide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${dmMono.variable}`}
    >
      <body>
        {/* Hide the splash before hydration when it has already played this
            session, so repeat loads never flash the dark curtain. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(sessionStorage.getItem("oree-splash-seen")==="1"){document.documentElement.setAttribute("data-splash-seen","")}}catch(e){}',
          }}
        />
        <Splash />
        {children}
      </body>
    </html>
  );
}
