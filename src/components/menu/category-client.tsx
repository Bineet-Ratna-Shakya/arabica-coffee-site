"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { MenuItem } from "@/types";
import { categoryImages } from "@/lib/constants";

interface CategoryClientProps {
  items: MenuItem[];
}

export function CategoryClient({ items }: CategoryClientProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="group text-center space-y-3 focus:outline-none"
          >
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-cream-200">
              <Image
                src={item.image || categoryImages[item.category]}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="112px"
              />
            </div>
            <p className="font-heading text-base text-coffee-900 leading-snug">
              {item.name}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-coffee-600">
              {item.isPopular && <Badge variant="popular">Popular</Badge>}
              {item.isNew && <Badge variant="new">New</Badge>}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent className="max-w-lg bg-cream-50 border-cream-200">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-coffee-900">
                  {selectedItem.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm text-coffee-700">
                <p>{selectedItem.description}</p>
                <div className="flex gap-2">
                  {selectedItem.isPopular && <Badge variant="popular">Popular</Badge>}
                  {selectedItem.isNew && <Badge variant="new">New</Badge>}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
