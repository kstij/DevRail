"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2">
              <span>Your</span>
              <span className="mx-2 text-white">
                <Badge>One Stop Solution!</Badge>
              </span>
              <span>for Developer Trust</span>
            </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
            Turning startups into  
              <span className="px-2 text-white">
              developer
              </span>
              favorites.
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We help startups earn developer trust through authentic advocacy, technical storytelling, and community-building.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Schedule a Call
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="#"
                target="_blank"
              >
                Email Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-white/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-white/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          />

          {/* Gradient overlays on all four sides */}
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-20 md:h-28 bg-gradient-to-t from-background/0 via-background/50 to-background rounded-lg"></div>
          <div className="absolute top-0 left-0 h-full w-12 md:w-20 bg-gradient-to-l from-background/0 via-background/50 to-background rounded-lg"></div>
          <div className="absolute top-0 right-0 h-full w-12 md:w-20 bg-gradient-to-r from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
