"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, MapPin } from "lucide-react";

export function MenuBottomBar() {
  return (
    <div className="sticky bottom-0 z-40 bg-coffee-900 text-cream-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <div>
            <p className="text-xs opacity-80">For item availability</p>
            <p className="font-medium">Choose a store</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-xs uppercase tracking-[0.18em] text-cream-50 hover:bg-cream-50/10">
            Select store
          </Button>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full text-cream-50 hover:bg-cream-50/10" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cream-50 px-1 text-[11px] font-semibold text-coffee-900">
              0
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function MenuCartButton() {
  return (
    <Button variant="outline" className="text-sm flex items-center gap-2" aria-label="View cart">
      <ShoppingCart className="h-5 w-5" />
      Cart
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-coffee-900 px-2 text-xs font-semibold text-cream-50">
        0
      </span>
    </Button>
  );
}
