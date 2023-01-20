import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import Feature from "../../components/Feature";

function FeaturesSection() {
  return (
    <CustomSection classNameParent="h-fit" classNameChild="w-full py-1">
      <div className="flex flex-col items-center gap-4 mb-[100px]">
        <Feature
          image={
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsZXhpYmxlJTIwd29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          button="Learn more"
          description={`We can scale our resource model up and down to match your demands, whether you're operating a simple marketing campaign in a single area or a big scale worldwide program spanning numerous regions and nations.`}
          title="Flexibility"
        />
        <Feature
          image={
            "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZml0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          button="Let's talk"
          description={`We recruit a variety of Firstclass pros at a reasonable rate. You can grow your business with our well trained and cost effective employees  `}
          title="Cost Effective"
          reverse
        />
        <Feature
          image={
            "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          button="Tell us your needs"
          description={`Our broad service offering eliminates the need for you to seek out different partners to satisfy your demand creation or customer retention goals.`}
          title="Various Services and Skills"
        />
      </div>
    </CustomSection>
  );
}

export default FeaturesSection;
