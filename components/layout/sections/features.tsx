import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Expertise + Insight",
    description:
      "We combine technical depth with community understanding to grow your developer audience.",
  },
  {
    icon: "BadgeCheck",
    title: "Community-First Approach",
    description:
      "Build meaningful relationships and authentic engagement across developer ecosystems.",
  },
  {
    icon: "Goal",
    title: "Amplified Advocacy",
    description:
      "Highlight developer success stories that showcase real impact.",
  },
  {
    icon: "PictureInPicture",
    title: "Targeted Developer Content",
    description:
      "Each asset is crafted for clarity, relevance, and value.",
  },
  {
    icon: "MousePointerClick",
    title: "Intuitive Visuals",
    description:
      "Strong, clean design that communicates complex tech effectively.",
  },
  {
    icon: "Newspaper",
    title: "Purposeful CTAs",
    description:
      "Strategically guide developers from awareness to active participation.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-white text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      We blend technical expertise with community insight helping startups grow with genuine developer trust, not just noise.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-white/20 p-2 rounded-full ring-8 ring-white/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="white"
                    className="text-white"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
