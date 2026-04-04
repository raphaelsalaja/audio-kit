import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexadecagon2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.705,5.328l-1.205-1.197v-1.683c0-.522-.425-.947-.947-.947h-1.683l-1.198-1.206c-.359-.36-.984-.36-1.344,0l-1.198,1.206h-1.683c-.522,0-.947.425-.947.947v1.683l-1.204,1.196c-.182.179-.281.418-.281.674s.1.495.28.672l1.205,1.197v1.683c0,.522.425.947.947.947h1.683l1.198,1.206c.18.18.418.279.672.279s.492-.099.672-.279l1.198-1.206h1.683c.522,0,.947-.425.947-.947v-1.683l1.204-1.196c.182-.179.281-.418.281-.674s-.1-.493-.28-.672Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Hexadecagon2;
