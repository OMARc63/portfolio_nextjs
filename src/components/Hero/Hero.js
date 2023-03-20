import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hello I'm Omar, <br /> A Full Stack Web Developper
      </SectionTitle>
      <SectionText>
        Increadibles Web apps with the most comman best Features and trends, you
        can build it with me, so just what do you wait for !!
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://nextjs.org/learn/foundations/about-nextjs",
            "_blank"
          )
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
