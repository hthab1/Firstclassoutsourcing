import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import Feature from "../../components/Feature";
//assets
import { Images } from "../../utilities/Image";

function FeaturesSection() {
  return (
    <CustomSection classNameParent="h-fit" classNameChild="w-full py-1">
      <div className="flex flex-col items-center gap-4 mb-[100px]">
        <Feature
          image={Images.features.flexiblity}
          more
          description={`We can scale our resource model up and down to match your demands, whether you're operating a simple marketing campaign in a single area or a big scale worldwide program spanning numerous regions and nations.`}
          title="Flexibility"
        />
        <Feature
          image={Images.features.costEffective}
          button="Let's talk"
          description={`We recruit a variety of Firstclass pros at a reasonable rate. You can grow your business with our well trained and cost effective employees  `}
          title="Cost Effective"
          reverse
        />
        <Feature
          image={Images.features.variousSkills}
          button="Tell us your needs"
          description={`Our broad service offering eliminates the need for you to seek out different partners to satisfy your demand creation or customer retention goals.`}
          title="Various Services and Skills"
        />
      </div>
    </CustomSection>
  );
}

export default FeaturesSection;
