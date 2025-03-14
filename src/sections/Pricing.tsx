"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CheckIcon from "@/assets/check.svg";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

interface PricingTier {
  id: string;
  title: string;
  monthly_price: number;
  button_text: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

export const Pricing = () => {
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricingData = async () => {
      setLoading(true);

      const { data: tiers, error: tiersError } = await supabase
        .from("pricing_tiers")
        .select("*");

      if (tiersError) {
        console.error("Error fetching tiers:", tiersError.message);
        setLoading(false);
        return;
      }

      const { data: features, error: featuresError } = await supabase
        .from("pricing_features")
        .select("*");

      if (featuresError) {
        console.error("Error fetching features:", featuresError.message);
        setLoading(false);
        return;
      }

      const tiersWithFeatures = tiers.map((tier) => ({
        ...tier,
        features: features
          .filter((feature) => feature.pricing_tier_id === tier.id)
          .map((feature) => feature.feature_text),
      }));

      setPricingTiers(tiersWithFeatures);
      setLoading(false);
    };

    fetchPricingData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-[#001E80]">Pricing</h2>
          <p className="mt-5 text-base text-gray-600 max-w-md">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ id, title, monthly_price, button_text, popular, features }) => (
            <Card
              key={id}
              className={`transition-all ${popular ? "bg-black text-white border-white" : "bg-white text-black"
                }`}
            >
              <div className="p-2">
                <div className="flex justify-between">
                  <h3>{title}</h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span>popular</span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthly_price}
                  </span>
                  <span
                    className={`tracking-tight font-bold ${popular ? "text-white/50" : "text-black/50"
                      }`}
                  >
                    /month
                  </span>
                </div>
                <Button className="w-full mt-6" variant={popular ? "secondary" : "default"}>
                  {button_text}
                </Button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};
