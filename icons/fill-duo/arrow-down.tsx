import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDown({
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
          d="M9 15.75C8.586 15.75 8.25 15.414 8.25 15V2.75C8.25 2.336 8.586 2 9 2C9.414 2 9.75 2.336 9.75 2.75V15C9.75 15.414 9.414 15.75 9 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.99999 16C8.80799 16 8.61599 15.927 8.46999 15.78L4.21999 11.53C3.92699 11.237 3.92699 10.762 4.21999 10.469C4.51299 10.176 4.988 10.176 5.281 10.469L9.001 14.189L12.721 10.469C13.014 10.176 13.489 10.176 13.782 10.469C14.075 10.762 14.075 11.237 13.782 11.53L9.53199 15.78C9.38599 15.926 9.19399 16 9.00199 16H8.99999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDown;
