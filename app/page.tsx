import { CTASection } from "./sections/CTASection";
import { DetailSection } from "./sections/DetailSection";
import { HeroSection } from "./sections/HeroSection";
import { MilestoneSection } from "./sections/MilestoneSection";
import { QuoteSection } from "./sections/QuoteSection";

export default function Home() {
    return (
        <main className="min-h-full">
            <HeroSection />
            <MilestoneSection />
            <DetailSection />
            <CTASection />
            <QuoteSection />
        </main>
    );
}
