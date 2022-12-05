import React from "react";
import Common from "./Common";
import banner from './images/banner.png'

export default function Home() {
  return (
    <Common
    name={'Grow your business with  '}
    title={'We have team of talented stackholders'}
    visit={'/services'}
    imgURL={banner}
    btnName={'Get Started'}
    />
  );
}
