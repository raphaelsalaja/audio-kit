import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleWine({
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
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M6.25 10H3V14H6.25C6.664 14 7 13.664 7 13.25V10.75C7 10.336 6.664 10 6.25 10Z"
          fill={fill}
        />
        <path
          d="M15.224 13.312C15.839 12.562 16.084 11.596 15.897 10.662L15.485 8.60401C15.415 8.25301 15.107 8.00101 14.75 8.00101H10.75C10.393 8.00101 10.084 8.25301 10.015 8.60401L9.60299 10.662C9.41599 11.597 9.66199 12.563 10.276 13.312C10.729 13.865 11.335 14.24 12 14.404V16H11.25C10.836 16 10.5 16.336 10.5 16.75C10.5 17.164 10.836 17.5 11.25 17.5H14.25C14.664 17.5 15 17.164 15 16.75C15 16.336 14.664 16 14.25 16H13.5V14.404C14.165 14.24 14.771 13.865 15.224 13.312Z"
          fill={secondaryfill}
        />
        <path
          d="M6.25 0.5C5.28379 0.5 4.5 1.28379 4.5 2.25V6.19648C4.23045 6.30241 3.89397 6.46676 3.5548 6.71693C2.76134 7.30219 2 8.32838 2 10V15.75C2 16.7162 2.78379 17.5 3.75 17.5H8.25C8.66421 17.5 9 17.1642 9 16.75C9 16.3358 8.66421 16 8.25 16H3.75C3.61221 16 3.5 15.8878 3.5 15.75V10C3.5 8.85962 3.98866 8.26081 4.4452 7.92407C4.686 7.74646 4.93025 7.63447 5.11508 7.56744C5.203 7.53555 5.2931 7.50665 5.38484 7.48778C5.74087 7.42274 6 7.11244 6 6.75V5H7.5V6.75C7.5 7.16421 7.83579 7.5 8.25 7.5C8.66421 7.5 9 7.16421 9 6.75V2.25C9 1.28379 8.21621 0.5 7.25 0.5H6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BottleWine;
