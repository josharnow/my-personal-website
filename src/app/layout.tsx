import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { 
  Navigation, 
  OldNavigation,
  Sidebar,
} from "@/src/components";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export const metadata: Metadata = {
  title: "Josh Arnow's Website",
  description: "Welcome to my website!",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex mx-auto w-full">
          {/* <Navigation /> */}
          {/* TODO - Make Sidebar component similar to the way the old navigation component was (i.e. with a toggle) */}
          {/* TODO - When the screen is "mobile sized" (i.e. small enough), make navbar operate on top similarly to old navbar. Will probably involve conditionally setting flex/flex-column on parent element here based on screen size (i.e. via Tailwind) */}
          <Sidebar />
          <main className="grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
