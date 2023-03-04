/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import Carousel1 from "../../../public/asstes/images/rsz_carousel-1.jpg";
import Carousel2 from "../../../public/asstes/images/rsz_carousel-2.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: Carousel1,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: Carousel2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: Carousel1,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", height: "auto" }}
        />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        >
        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
