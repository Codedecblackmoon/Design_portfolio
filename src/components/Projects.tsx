import { useEffect, useState } from "react";
import { Mosaic, type MosaicImage } from "./Mosaic";

import image1 from "../assets/design/d1.png";
import image2 from "../assets/design/d2.png";
import image4 from "../assets/design/d4.png";
import image5 from "../assets/design/d5.png";
import image6 from "../assets/design/d6.jpg";
import image7 from "../assets/design/d7.png";
import image8 from "../assets/design/d8.png";
import image9 from "../assets/design/d9.png";
import image10 from "../assets/design/d10.png";
import image11 from "../assets/design/d11.png";
import image12 from "../assets/design/d12.png";
import image13 from "../assets/design/d13.png";
import image14 from "../assets/design/d14.png";
import image15 from "../assets/design/d15.png";
import image16 from "../assets/design/d16.png";
import image17 from "../assets/design/d17.png";
import image18 from "../assets/design/d18.jpg";
import image19 from "../assets/design/d19.png";
import image20 from "../assets/design/d20.png";
import image21 from "../assets/design/d21.jpg";

/**
 * Projects gallery — adaptive mosaic where each tile's height matches
 * the image's natural aspect ratio. Dimensions are measured at runtime
 * so we don't need to hard-code width/height for each asset.
 */
function Projects() {
  const sources = [
    { src: image1, alt: "Project 1" },
    { src: image2, alt: "Project 2" },
    { src: image4, alt: "Project 4" },
    { src: image5, alt: "Project 5" },
    { src: image6, alt: "Project 6" },
    { src: image7, alt: "Project 7" },
    { src: image8, alt: "Project 8" },
    { src: image9, alt: "Project 9" },
    { src: image10, alt: "Project 10" },
    { src: image11, alt: "Project 11" },
    { src: image12, alt: "Project 12" },
    { src: image13, alt: "Project 13" },
    { src: image14, alt: "Project 14" },
    { src: image15, alt: "Project 15" },
    { src: image16, alt: "Project 16" },
    { src: image17, alt: "Project 17" },
    { src: image18, alt: "Project 18" },
    { src: image19, alt: "Project 19" },
    { src: image20, alt: "Project 20" },
    { src: image21, alt: "Project 21" },

  ];

  const [images, setImages] = useState<MosaicImage[]>([]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      sources.map(
        ({ src, alt }) =>
          new Promise<MosaicImage>((resolve) => {
            const img = new Image();
            img.onload = () =>
              resolve({ src, alt, width: img.naturalWidth, height: img.naturalHeight });
            img.onerror = () => resolve({ src, alt, width: 800, height: 800 });
            img.src = src;
          }),
      ),
    ).then((loaded) => {
      if (!cancelled) setImages(loaded);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Gallery">
      <Mosaic images={images} />
    </div>
  );
}

export default Projects;
