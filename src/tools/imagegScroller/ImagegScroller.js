import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "../../../public/Assets/images/mainImg.png";
import img2 from "../../../public/Assets/images/thirdImg.png";
import img3 from "../../../public/Assets/images/blender.png";
import { Scroller } from "./styleImageScroller";

const ImagegScroller = () => {
  //   useEffect(() => {
  //     if (typeof window !== undefined) {
  //       const test = document.querySelector(".scroller");
  //       const right = document.querySelector(".right");
  //       test.addEventListener("scroll", function () {
  //         right.style.transform =
  //           "translate3d(0," + test.scrollTop * 2 + "px, 0)";
  //       });
  //     }
  //   }, []);
  return (
    <div className=" col-lg-5 col-md-5 scroller">
      <Scroller>
        <Image alt="image" src={img1} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img2} /> <Image alt="image" src={img1} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img2} />
      </Scroller>
      <Scroller position="sticky">
        <Image alt="image" src={img2} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img2} />
      </Scroller>
      <Scroller className="right">
        <Image alt="image" src={img3} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img2} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img1} />
        <Image alt="image" src={img3} />
        <Image alt="image" src={img2} />
      </Scroller>
      {/* <script>
        {document.ready(function () {
          window
            .scroll(function () {
              (document.querySelector(".right").style = "transform"),
                "translate3d(0," + $(this).scrollTop() * 2 + "px, 0)";
            })
            .scroll();
        })}
      </script> */}
    </div>
  );
};

export default ImagegScroller;
