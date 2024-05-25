import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { 
  Navigation, 
  OldNavigation,
  Sidebar,
} from "@/src/components";
// import { isMobileDevice, getBrowser, getDevice } from "@/src/utils/device";


// TODO - Metadata for each page (https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
export const metadata: Metadata = {
  applicationName: "Josh Arnow's Website", // NOTE - This should be applied on all pages
  title: "Josh Arnow's Website", // NOTE - This should change depending on what page is being viewed. Same goes for other titles in this metadata object.
  description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida.",
  authors: [{name: "Josh Arnow", url: "https://www.josharnow.com"}],
  creator: "Josh Arnow",
  metadataBase: new URL('https://www.josharnow.com'),
  generator: "Next.js",
  keywords: ["Josh Arnow", "software engineer", "full stack", "full-stack", "New York", "Florida", "software"], // TODO - Add more relevant keywords. Although it appears that Google doesn't actually look for them (https://developers.google.com/search/docs/crawling-indexing/special-tags)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: { // NOTE - https://ahrefs.com/blog/open-graph-meta-tags/
    type: "website",
    url: "https://www.josharnow.com",
    siteName: "Josh Arnow's Website",
    title: "Josh Arnow's Website",
    description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida.",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 1216,
        alt: "Josh Arnow's Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.josharnow.com",
    creator: "Josh Arnow",
    images: "/open-graph-image.png", // TODO - Make this an image of whatever page is being shared
    description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida.",
  },
};


const inter = Inter({
  subsets: ["latin"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
});

// NOTE - Apple's San Francisco font isn't legally allowed to be bundled with this webapp, but I can make the app use it via the system default font it if the site is being viewed on an Apple device...

// const myFont = localFont({ 
//   src: ""
// });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE - ***This can be passed to components as a prop to affect functionality based on whether the user is on a mobile device or not***

  // NOTE - Attempting to use these functions will result in the following build error: "Server Actions are not supported with static export."
  // const mobile = await isMobileDevice();
  // const browser = await getBrowser();
  // const device = await getDevice();

  // console.log("Mobile device: ", mobile);
  // console.log("Browser: ", browser);
  // console.log("Device: ", device);

  // TODO - Fallback to system font on Apple devices (?)

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
