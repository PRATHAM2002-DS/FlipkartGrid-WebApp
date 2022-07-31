import React from "react";
// import MidSlide from "../Home/MidSlide";
import Result from "../Result/Result";

const products = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/image/312/312/l3dcl8w0/mobile/j/o/x/-original-imagehxy5hzshkdv.jpeg?q=70",
    title: "infinix",
    description: "",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/image/312/312/l5h2xe80/mobile/f/m/h/9-se-5g-i2019-iqoo-original-imagg5ghupfn4vjv.jpeg?q=70",
    title: "iqoo 9SE",
    description: "",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/image/312/312/km2clu80/mobile/g/i/p/rog-phone-5-zs673ks-1b052in-asus-original-imagff5n9fghzgmp.jpeg?q=70",
    title: "Asus Rog 5",
    description: "",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/image/312/312/l5h2xe80/mobile/5/c/q/neo-6-5g-i2202-iqoo-original-imagg59gzac7ypwh.jpeg?q=70",
    title: "iqoo neo 6",
    description: "",
  },
  {
    id: 5,
    url: "https://rukminim1.flixcart.com/image/312/312/l4zxn680/mobile/r/a/j/10r-5g-cph2423-oneplus-original-imagfry9zsnyhhnh.jpeg?q=70",
    title: "One Plus 10R",
    description: "",
  },
  {
    id: 6,
    url: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/c/q/x70-pro-v2114-vivo-original-imag7bq5m6bbefup.jpeg?q=70",
    title: "Vivo X70",
    description: "",
  },
  {
    id: 7,
    url: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/c/q/x70-pro-v2114-vivo-original-imag7bq5m6bbefup.jpeg?q=70",
    title: "Vivo X70",
    description: "",
  },
];

const Query = () => {
  return (
    <div style={{ paddingTop: "200px" }}>
      <Result products={products} />;
    </div>
  );
};

export default Query;
