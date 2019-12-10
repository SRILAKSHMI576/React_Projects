import React from "react";
import CarouselImages from "./Components/Carousel/Carousel";

function App() {
  const Images = [
    {
      id: 1,
      title:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
      content: "Hong kong"
    },
    {
      id: 2,
      title:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
      content: "China"
    },
    {
      id: 3,
      title:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
      content: "Singapore"
    },
    {
      id: 4,
      title:
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
      content: "Japan"
    }
  ];

  return (
    <div className="App">
      <CarouselImages images={Images} />
    </div>
  );
}

export default App;
