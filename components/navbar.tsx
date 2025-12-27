"use client";

import { useMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const isDesktop = useMobile();

  return (
    <>
      <nav
        className={cn(
          "fixed z-50 h-16 border w-104 items-center px-4 justify-between backdrop-blur-lg",
          isDesktop ? "flex" : "hidden"
        )}
      >
        {isDesktop && (
          <div className="flex items-center gap-x-4">
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
            <p className="font-bold">Tahasin Tonmoy</p>
          </div>
        )}
      </nav>
    </>
  );
};
