import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2({
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
          d="M8.99898 15.9731C8.51848 15.9731 8.0703 15.7817 7.7383 15.435L2.25878 9.74211C1.41498 8.85441 0.969691 7.69571 1.001 6.47601C1.0332 5.25681 1.53709 4.12301 2.42189 3.28311C3.30569 2.44371 4.46188 2.00142 5.68358 2.02922C6.90328 2.06042 8.0371 2.56482 8.877 3.44912C8.918 3.49262 8.9581 3.53651 8.9981 3.58141C9.6485 2.83581 10.5284 2.32022 11.5313 2.11752C12.9405 1.83192 14.3897 2.22741 15.5001 3.20201C16.1466 3.76791 16.6231 4.53652 16.8419 5.36462C17.256 6.94472 16.8448 8.57941 15.7442 9.73861L15.7403 9.74201L10.2598 15.4358C9.92867 15.7815 9.48038 15.9731 8.99898 15.9731Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Heart2;
