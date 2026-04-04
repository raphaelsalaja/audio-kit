import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridDots({
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
          d="M9 4C9.55228 4 10 3.55228 10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15 4C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3 10C3.55228 10 4 9.55228 4 9C4 8.44772 3.55228 8 3 8C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3 16C3.55228 16 4 15.5523 4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GridDots;
