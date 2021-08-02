import Global from "./styles/Global";
import CarouselSlot from "./Components/Slots/CarouselSlot";

import Carousel from "./Components/Carousel";
//data
import images from "./data/images";

//use the images prop to pass an array that contains elements as objects
//which is structured like {src, alt, id}
//src should point at the image src
//alt is for accessibility and should describe the image
//id must be an unique value, used for the key prop, which helps React to keep track of that react element
function App() {
  return (
    <>
      <Global />
      <CarouselSlot Carousel={Carousel} images={images} />
    </>
  );
}

export default App;
