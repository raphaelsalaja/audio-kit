import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal4({
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
          d="M5.125 5.125L12.875 12.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.104V15C15.25 15.138 15.138 15.25 15 15.25H11.104C10.881 15.25 10.77 14.981 10.927 14.823L14.823 10.927C14.98 10.77 15.25 10.881 15.25 11.104Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.104V15C15.25 15.138 15.138 15.25 15 15.25H11.104C10.881 15.25 10.77 14.981 10.927 14.823L14.823 10.927C14.98 10.77 15.25 10.881 15.25 11.104Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.896 2.75H3C2.862 2.75 2.75 2.862 2.75 3V6.896C2.75 7.119 3.019 7.23 3.177 7.073L7.073 3.177C7.23 3.02 7.119 2.75 6.896 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.896 2.75H3C2.862 2.75 2.75 2.862 2.75 3V6.896C2.75 7.119 3.019 7.23 3.177 7.073L7.073 3.177C7.23 3.02 7.119 2.75 6.896 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal4;
