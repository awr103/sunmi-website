import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunmi&apos;s World",
  description: "A world of gardens, geckos, and bugs!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link href="/" className="flex items-center text-gray-900 hover:text-gray-600">
                  Home
                </Link>
                <Link href="/about" className="flex items-center text-gray-900 hover:text-gray-600">
                  About Me
                </Link>
                <Link href="/pets" className="flex items-center text-gray-900 hover:text-gray-600">
                  My Pets
                </Link>
                <Link href="/tokay-geckos" className="flex items-center text-gray-900 hover:text-gray-600">
                  About Tokay Geckos
                </Link>
                <Link href="/blog" className="flex items-center text-gray-900 hover:text-gray-600">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-white border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} Sunmi&apos;s World</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
