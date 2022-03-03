import React from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
export function HomeCarousel({}) {
  return (
    <Carousel dynamicHeight="true">
      <Image src="/carousel/img 1.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 2.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 3.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 4.jpeg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 5.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 6.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 7.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 8.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 9.jpeg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 10.jpg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 11.jpeg" height="300px" objectFit="cover" />
      <Image src="/carousel/img 12.jpg" height="300px" objectFit="cover" />
    </Carousel>
  );
}
