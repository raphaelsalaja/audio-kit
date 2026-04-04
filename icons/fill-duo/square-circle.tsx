import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCircle({
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
          d="M10.0286 6.74145C10.4728 6.60417 10.9642 6.5 11.5 6.5C14.2612 6.5 16.5 8.73879 16.5 11.5C16.5 14.2612 14.2612 16.5 11.5 16.5C8.73879 16.5 6.5 14.2612 6.5 11.5C6.5 10.9642 6.60417 10.4728 6.74145 10.0286C6.77748 9.91197 6.8414 9.80595 6.92768 9.71967L9.71967 6.92768C9.80595 6.8414 9.91197 6.77748 10.0286 6.74145Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 2C2.78379 2 2 2.78379 2 3.75V9.25C2 10.2162 2.78379 11 3.75 11H9.25C10.2162 11 11 10.2162 11 9.25V3.75C11 2.78379 10.2162 2 9.25 2H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareCircle;
