import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import GridPattern from "@/components/magicui/grid-pattern";


export const metadata = {
  title: "Chirp Charm",
  description: "Twitter Bio Generator",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-30" />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
