import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Show up where developers are, with authenticity that builds lasting credibility.",
  },
  {
    icon: "LineChart",
    title: "More Leads",
    description:
      "Turn awareness into qualified developer interest through content, demos, and advocacy.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Simplify onboarding and docs so developers move from trying to adopting faster.",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Experiment, learn, and scale what truly resonates with developers.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-white mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Developer Trust
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
           We help startups earn developer trust faster through authentic advocacy, technical storytelling, and strategic community building. Whether you’re launching a new API or scaling your platform, our DevRel team helps you grow with credibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="white"
                    className="mb-6 text-white"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
