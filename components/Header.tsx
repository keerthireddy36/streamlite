'use client';

import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition">
          StreamLite
        </Link>

        {/* Navigation + Search */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/genres" className="hover:text-blue-400 transition">Genres</Link>
          </nav>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}