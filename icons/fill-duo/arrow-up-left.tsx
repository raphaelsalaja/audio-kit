import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpLeft({
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
          d="M14.25 15C14.058 15 13.866 14.927 13.72 14.78L3.46999 4.52999C3.17699 4.23699 3.17699 3.76199 3.46999 3.46899C3.76299 3.17599 4.238 3.17599 4.531 3.46899L14.78 13.72C15.073 14.013 15.073 14.488 14.78 14.781C14.634 14.927 14.442 15.001 14.25 15.001V15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75 10.51C3.336 10.51 3 10.174 3 9.76001V3.75C3 3.336 3.336 3 3.75 3H9.761C10.175 3 10.511 3.336 10.511 3.75C10.511 4.164 10.175 4.5 9.761 4.5H4.5V9.76001C4.5 10.174 4.164 10.51 3.75 10.51Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowUpLeft;
