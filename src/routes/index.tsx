import { createFileRoute } from "@tanstack/react-router";
// import { Mosaic, type MosaicImage } from "@/components/Mosaic";
// import { Projects } from "../components/Projects";
import {App} from "./app";
// import g1 from "@/assets/g1.jpg";
// import g2 from "@/assets/g2.jpg";
// import g3 from "@/assets/g3.jpg";
// import g4 from "@/assets/g4.jpg";
// import g5 from "@/assets/g5.jpg";
// import g6 from "@/assets/g6.jpg";
// import g7 from "@/assets/g7.jpg";
// import g8 from "@/assets/g8.jpg";
// import g9 from "@/assets/g9.jpg";
// import g10 from "@/assets/g10.jpg";
// import g11 from "@/assets/g11.jpg";
// import g12 from "@/assets/g12.jpg";
// import g13 from "@/assets/g13.jpg";
// import g14 from "@/assets/g14.jpg";
// import g15 from "@/assets/g15.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// const images: MosaicImage[] = [
//   { src: g1, width: 640, height: 896, alt: "Portrait in black blazer" },
//   { src: g2, width: 704, height: 896, alt: "Sunlit bedroom" },
//   { src: g3, width: 896, height: 640, alt: "Yellow living room" },
//   { src: g4, width: 640, height: 704, alt: "Motion blur portrait" },
//   { src: g5, width: 1024, height: 640, alt: "Group walking in field" },
//   { src: g6, width: 704, height: 704, alt: "Man in orange by truck" },
//   { src: g7, width: 896, height: 704, alt: "Mid-century living room" },
//   { src: g8, width: 640, height: 704, alt: "Portrait in red light" },
//   { src: g9, width: 704, height: 768, alt: "Ceramic llama still life" },
//   { src: g10, width: 640, height: 832, alt: "Figure in green garden" },
//   { src: g11, width: 704, height: 768, alt: "Abstract art print" },
//   { src: g12, width: 640, height: 640, alt: "Succulent in terracotta pot" },
//   { src: g13, width: 704, height: 832, alt: "Puffer jacket portrait" },
//   { src: g14, width: 768, height: 640, alt: "Colorful sculpture" },
//   { src: g15, width: 896, height: 576, alt: "Blue marble texture" },
// ];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <App />
    </main>
  );
}
