import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Database from "@/assets/Database.png"
import Image from "next/image"
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 px-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 1.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Secure Storage. Anytime, Anywhere.
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Safely store, access, and share your files from any device. Our secure cloud storage keeps your data protected and always within reach.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button >Get for free</Button>
              <Button variant="outline">
                <span>Learn more</span>
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="mt-20 md:my-20 max-h-[500px] md:flex-1 relative flex items-center justify-center">
  <Image src={Database} alt="some image" className="md:h-full md:w-auto md:max-w-none" />
</div>

        </div>
      </div>
    </section>
  );
};