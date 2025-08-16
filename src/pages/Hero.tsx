import { CTA } from "@/components/hero/cta";
import { CTA_Mobile } from "@/components/hero/cta_mobile";
import LightningWrapper from "@/ui-components/Lightning-wrapper";

const Hero = () => {
  return (
    <div className="relative w-full h-screen lg:h-[calc(100vh+5vh)] min-h-[720px]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10">
        <LightningWrapper />
      </div>

      <div className="relative z-20 flex flex-col h-full justify-between lg:flex-row pt-8 overflow-hidden">

        <div className="lg:basis-2/5 flex items-center justify-center">
          <img
            src="src/images/OmarMain.png"
            alt="Personal Trainer"
            className="object-top min-h-[max(100vh,960px)] h-[calc(100vh+50vh)] lg:h-[calc(100vh+100vh)] lg:pt-[45vh] object-cover"
          />
        </div>

        <div className="lg:basis-3/5 hidden lg:flex flex-col justify-center items-center">
          <div className="w-full flex justify-center mb-8">
            <img
              src="src/images/placeholder_logo.svg"
              alt="Personal Trainer Logo"
              className="object-top min-h-[max(20vh,200px)] h-[calc(10vh)] lg:h-[calc(10vh)] object-cover"
            />
          </div>
          <div className="justify-center p-16">
            <CTA />
          </div>
        </div>

        {/* CTA mobile visibile solo su schermi piccoli */}
        <div className="absolute flex flex-col items-center bottom-0 -translate-y-24 z-20 w-full lg:hidden">
          <CTA_Mobile />
        </div>
      </div>
    </div>
  );
};


export default Hero;