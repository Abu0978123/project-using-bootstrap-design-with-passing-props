import React from "react";
import { Link } from "react-router-dom";
import Common from "./Common";
import contact from './images/conact1.webp'

export default function About() {
  return (
    <Common
    name={'Welcome to About page  '}
    title={'You can contact us any time'}
    visit={'/contact'}
    imgURL={contact}
    btnName={'Contact Now'}
    />
  );
}
