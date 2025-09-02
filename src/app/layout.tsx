import type { Metadata } from "next";
import { Faustina, Fauna_One, Lato, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/PopupProvider";
import PopupsRootClient from "./components/PopupsRootClient";

const faustina = Faustina({ subsets: ["latin"], weight: ["400","500"], variable: "--font-faustina" });
const faunaOne = Fauna_One({ subsets: ["latin"], weight: "400", variable: "--font-fauna-one" });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"], variable: "--font-lato" });
const inter = Inter({ subsets: ["latin"], weight: ["300","400","500"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freeforcharity.org"),
  title: {
    default: "Free For Charity | Reduce Costs, Increase Impact",
    template: "%s | Free For Charity",
  },
  description:
    "Free For Charity connects students, professionals, and businesses with nonprofits to reduce costs and increase revenues—putting more resources back into their missions.",
  keywords: [
    "nonprofit",
    "charity",
    "volunteer",
    "donate",
    "free hosting",
    "domains",
    "Microsoft 365",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.freeforcharity.org/",
    siteName: "Free For Charity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: [
      { url: "/web-app-manifest-512x512.png", width: 512, height: 512, alt: "Free For Charity" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freeforcharity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${faustina.variable} ${faunaOne.variable} ${lato.variable} ${inter.variable} antialiased`}>
        <PopupProvider>
          <NavBar />
          {children}
          <Footer />
          <PopupsRootClient />
        </PopupProvider>
      </body>
    </html>
  );
}
