import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, DM_Mono } from "next/font/google";
import { Splash } from "@/components/Splash";
import { copy } from "@/content/copy";
import "../globals.css";

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
  /* The official domain, so relative metadata (Open Graph, canonicals) never
     resolves to the vercel.app preview host once the domain is repointed. */
  metadataBase: new URL("https://oreeconseil.ca"),
  title: copy.fr.meta.site.title,
  description: copy.fr.meta.site.description,
};

/* Root layout for the French tree.
   French is the default locale and sits at the root URLs, because the
   audience is Quebec and the legacy 301s land here.
   Two root layouts rather than one, so each subtree can declare its own
   lang attribute and still be statically generated. */
export default function FrRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
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
