import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowUpLeft({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.28 10.28C9.134 10.426 8.942 10.5 8.75 10.5C8.558 10.5 8.366 10.427 8.22 10.28L5 7.06006V8.74902C5 9.16302 4.664 9.49902 4.25 9.49902C3.836 9.49902 3.5 9.16302 3.5 8.74902V5.24902C3.5 4.83502 3.836 4.49902 4.25 4.49902H7.75C8.164 4.49902 8.5 4.83502 8.5 5.24902C8.5 5.66302 8.164 5.99902 7.75 5.99902H6.061L9.281 9.21899C9.574 9.51199 9.573 9.98703 9.28 10.28Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectArrowUpLeft;
