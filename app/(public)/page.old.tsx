import { Metadata } from 'next'
import EngineeringHero from "@/components/EngineeringHero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: 'Aluplan - Premium Engineering Solutions',
  description: 'High-quality engineering solutions and software.',
}

export default function Page() {
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <EngineeringHero />
      <Divider />
      <div className="bg-graphite-950">
        <Products />
        <Features />
      </div>
    </div>
  )
}
