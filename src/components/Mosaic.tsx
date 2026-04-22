import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import "../styles.css"

export type MosaicImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  images: MosaicImage[];
  /** Base column width assumption in px — used only to scale row spans. */
  baseColumnWidth?: number;
  /** Row height in px — must match CSS grid-auto-rows. */
  rowHeight?: number;
  /** Gap in px — must match CSS gap. */
  gap?: number;
};

/**
 * Mosaic gallery whose tile heights adapt to each image's aspect ratio.
 *
 * Click a tile to open a lightbox: the backdrop dims, and the image is
 * shown centered at its natural ratio without cropping.
 */
export function Mosaic({ images, baseColumnWidth = 320, rowHeight = 8, gap = 16 }: Props) {
  const items = useMemo(() => {
    return images.map((img) => {
      const ratio = img.height / img.width;
      const renderedHeight = ratio * baseColumnWidth;
      const span = Math.max(8, Math.round((renderedHeight + gap) / (rowHeight + gap)));
      return { ...img, span };
    });
  }, [images, baseColumnWidth, rowHeight, gap]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="mosaic">
        {items.map((img, i) => (
          <figure
            key={img.src}
            className="mosaic-item group cursor-zoom-in"
            style={{ ["--span" as string]: img.span }}
            onClick={() => setActiveIndex(i)}
          >
            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" />
          </figure>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent
          className="max-w-none w-auto h-auto bg-transparent border-0 p-0 shadow-none flex items-center justify-center sm:rounded-none"
          style={{ maxWidth: "95vw", maxHeight: "95vh" }}
        >
          <DialogTitle className="sr-only">{active?.alt ?? "Image"}</DialogTitle>
          <DialogDescription className="sr-only">Expanded gallery image</DialogDescription>
          {active && (
            <img
              src={active.src}
              alt={active.alt}
              className="block object-contain rounded-lg shadow-2xl animate-scale-in"
              style={{ maxWidth: "95vw", maxHeight: "95vh", width: "auto", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
