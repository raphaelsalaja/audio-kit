import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDots({
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
          d="M9.00012 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00012 1C4.58184 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58184 17 9.00012 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 10C8.44912 10 8.00012 9.551 8.00012 9C8.00012 8.449 8.44912 8 9.00012 8C9.55112 8 10.0001 8.449 10.0001 9C10.0001 9.551 9.55112 10 9.00012 10Z"
          fill={fill}
        />
        <path
          d="M5.50012 10C4.94912 10 4.50012 9.551 4.50012 9C4.50012 8.449 4.94912 8 5.50012 8C6.05112 8 6.50012 8.449 6.50012 9C6.50012 9.551 6.05112 10 5.50012 10Z"
          fill={fill}
        />
        <path
          d="M12.5001 10C11.9491 10 11.5001 9.551 11.5001 9C11.5001 8.449 11.9491 8 12.5001 8C13.0511 8 13.5001 8.449 13.5001 9C13.5001 9.551 13.0511 10 12.5001 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleDots;
