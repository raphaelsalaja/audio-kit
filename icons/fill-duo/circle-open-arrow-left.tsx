import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowLeft({
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
          d="M9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.52999 6.28003C9.82299 5.98703 9.82299 5.51199 9.52999 5.21899C9.38399 5.07299 9.19199 4.99902 8.99999 4.99902C8.80799 4.99902 8.61599 5.07199 8.46999 5.21899L5.21999 8.46899C4.92699 8.76199 4.92699 9.23703 5.21999 9.53003L8.46999 12.78C8.76299 13.073 9.238 13.073 9.531 12.78C9.824 12.487 9.824 12.012 9.531 11.719L7.561 9.74902H16.25C16.664 9.74902 17 9.41302 17 8.99902C17 8.58502 16.664 8.24902 16.25 8.24902H7.561L9.531 6.27899L9.52999 6.28003Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowLeft;
