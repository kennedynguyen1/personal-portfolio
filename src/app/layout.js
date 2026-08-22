import { GeistSans } from "geist/font/sans";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Kennedy Nguyen",
  metadataBase: new URL("https://kennedynguyen.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${sora.variable}`}>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider>
          <main className="flex justify-center bg-stone-100 dark:bg-stone-950 font-extralight min-h-screen selection:bg-[#f5d3bd] dark:selection:bg-[#7a3d1e] bg-[radial-gradient(#e8e1cb_1px,transparent_1px)] dark:bg-[radial-gradient(#33261a_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 text-neutral-500 dark:text-neutral-400 md:mt-[60px]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZVLSZR04HM" />
    </html>
  );
}
