'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { gadgets, type Gadget } from '@/data/gadgets';

type SearchBarProps = {
  onSelect?: (gadget: Gadget) => void;
};

export function SearchBar({ onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    return gadgets
      .filter(g =>
        g.name.toLowerCase().includes(lowerQuery) ||
        g.category.toLowerCase().includes(lowerQuery) ||
        g.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
        g.description.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => (i + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => (i - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        handleSelect(results[selectedIndex]);
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelect = (gadget: Gadget) => {
    if (onSelect) {
      onSelect(gadget);
    } else {
      window.open(gadget.amazonUrl, '_blank');
    }
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search gadgets, categories, features..."
          className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-white/40 outline-none transition focus:border-neonBlue focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
        />
        <svg
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {query && (
          <button
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/40 hover:bg-white/10 hover:text-white transition"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-night/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="p-2">
              <p className="px-3 py-2 text-xs uppercase tracking-wider text-white/40">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </p>

              {results.map((gadget, index) => (
                <motion.button
                  key={gadget.id}
                  onClick={() => handleSelect(gadget)}
                  className={`w-full flex items-center gap-4 rounded-xl p-3 text-left transition ${
                    index === selectedIndex
                      ? 'bg-neonBlue/20 border border-neonBlue/40'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={gadget.image}
                      alt={gadget.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{gadget.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-white/50">{gadget.category}</span>
                      <span className="text-neonBlue font-semibold text-sm">{gadget.price}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                        gadget.badge === 'DEAL' ? 'bg-blazeOrange/20 text-blazeOrange' :
                        gadget.badge === 'NEW' ? 'bg-cyberPurple/20 text-cyberPurple' :
                        gadget.badge === 'HOT' ? 'bg-hotPink/20 text-hotPink' :
                        'bg-limePulse/20 text-limePulse'
                      }`}>
                        {gadget.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-white/30">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <p className="text-center text-xs text-white/40">
                Press <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 mx-1">↑</kbd>
                <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 mr-1">↓</kbd> to navigate,
                <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5 mx-1">Enter</kbd> to select
              </p>
            </div>
          </motion.div>
        )}

        {isOpen && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 mt-2 w-full rounded-2xl border border-white/10 bg-night/95 p-8 text-center backdrop-blur-xl"
          >
            <p className="text-white/60">No gadgets found for "{query}"</p>
            <p className="mt-2 text-sm text-white/40">Try searching for categories like "Gaming Gear" or features like "Wireless"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
