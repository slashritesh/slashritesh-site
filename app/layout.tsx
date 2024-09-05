import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/themes.provider";
import NavHeader from "@/components/NavHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(" min-h-screen", poppins.className)}>
        <div className="min-h-dvh relative bg-background flex flex-col">

          {/* // background radical blue */}
          <div className="absolute z-[1] opacity-45 top-0 left-0 h-full w-full px-5 py-24 [background:radial-gradient(226%_125%_at_20%_100%,#000_40%,#63e_100%)]"></div>

          {/* // background grid */}
          <div className="absolute z-[8] bottom-0 left-0 right-0 top-0 opacity-[0.09] bg-[linear-gradient(to_right,#ffff_1px,transparent_1px),linear-gradient(to_bottom,#ffff_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <main className="flex-1 z-10">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <NavHeader />
              {children}
            </ThemeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
