'use client'
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

export default function SearchBar({ items }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fuse = new Fuse(items, {
    keys: ['attributes.title'], // Claves de los datos
    includeScore: true,
    threshold: 0.3, // Sensibilidad de la búsqueda
  });

  const handleSearch = (event) => {
    const { value } = event.target;
    setQuery(value);
    if (value) {
      const fuseResults = fuse.search(value);
      setResults(fuseResults.map(result => result.item));
    } else {
      setResults([]);
    }
  };

  return (
    <div className='relative'>
      <label className="relative">
        <Input 
          type="text" 
          value={query}
          onChange={handleSearch}
          placeholder="Buscar repuestos..." 
          className="w-full h-[40px] rounded-full bg-gray-50 pl-9 focus-visible:ring-slate-50"
        />
        <Search 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"
        />
      </label>
      {query && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md p-5 rounded-3xl'>
          <ScrollArea className='w-full h-[300px] p-2'>
            <div>
              {results.map((item) => (
                <Link onClick={ () => setQuery('')} href={`/p/${item.attributes.slug}`} key={item.id} className='p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-50 rounded'>
                  <div className='flex-none'>
                    {item?.attributes.gallery?.data ? (
                      <CldImage
                        width={50}
                        height={50}
                        src={item.attributes.gallery?.data[0]?.attributes?.url}
                        alt={item.attributes.title}
                        className="aspect-square object-contain"
                        crop="pad"
                        gravity="center"
                        background="white"
                        border="40px_solid_white"
                        format="webp"
                      />
                    ) : (
                      <Image
                        width={50}
                        height={50}
                        src="/placeholder.png"
                        alt={item.attributes.title}
                        className="aspect-square object-contain"
                      />
                    )}
                  </div>
                  <p>{item.attributes.title}</p>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};
