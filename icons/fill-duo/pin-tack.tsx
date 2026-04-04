import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinTack({
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
          d="M5 3.75C5 2.23079 6.23079 1 7.75 1H10.25C11.7692 1 13 2.23079 13 3.75V7.70964C13.3044 8.05592 13.6285 8.48244 13.9287 8.99684C14.6457 10.2249 14.8967 11.3914 14.994 12.1553C15.0212 12.369 14.9552 12.584 14.8128 12.7457C14.6704 12.9074 14.4654 13 14.25 13H3.75C3.53458 13 3.32956 12.9074 3.18718 12.7457C3.0448 12.584 2.9788 12.369 3.00601 12.1553C3.10333 11.3909 3.35539 10.225 4.07088 8.99758C4.37047 8.48276 4.69472 8.05582 5 7.70912V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.25 13V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V13H8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PinTack;
