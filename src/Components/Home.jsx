import React from "react";
import { Box, styled } from "@mui/material";
import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import MidSection from "./Home/MidSection";
import MidSlide from "./Home/MidSlide";

import Slide from "./Home/Slide";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const products = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles",
    description: "Get trend score",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
    title: "Fashion",
    description: "Get trend score",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
    description: "Get trend score",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/image/300/300/ke7ff680/hammock-swing/j/f/u/q3-jkaf-y3l0-furniture-kart-original-imafux96kpy7grch.jpeg?q=70",
    title: "Furniture",
    description: "Get trend score",
  },
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <Link to="/trends" style={{ textDecoration: "none", color: "black" }}>
          <MidSlide products={products} />
        </Link>
        <MidSection />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </>
  );
};

export default Home;
