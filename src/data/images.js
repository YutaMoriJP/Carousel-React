import one from "../img/one.jpeg";
import two from "../img/two.jpeg";
import three from "../img/three.jpeg";
import { v4 as uuidv4 } from "uuid";

const images = [
  { src: one, id: uuidv4(), alt: "gradient image" },
  { src: two, id: uuidv4(), alt: "green image" },
  { src: three, id: uuidv4(), alt: "purple image" },
];

export default images;
