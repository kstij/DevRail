import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Developer Community Programs",
    description:
      "Build thriving communities with events, forums, and online spaces where developers can learn, collaborate, and grow.",
    pro: 0,
  },
  {
    title: "Technical Content & Advocacy",
    description:
      "Create blog posts, tutorials, demos, and talks that showcase your technology and foster genuine trust among developers.",
    pro: 0,
  },
  {
    title: "Developer Onboarding & Enablement",
    description: "Streamline SDKs, APIs, and documentation to make adoption seamless and ensure developers succeed with your platform.",
    pro: 0,
  },
  {
    title: "Developer Feedback & Insights",
    description: "Collect actionable feedback and measure engagement to optimize your product and advocacy strategy.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-white text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Empower Your Developer Ecosystem
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From community building and advocacy to technical enablement and growth strategy, we help you connect, engage, and inspire developers.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
