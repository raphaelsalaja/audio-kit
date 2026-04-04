import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCaretDown({
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
        <rect
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(18 18) rotate(-180)"
          x="2.75"
          y="2.75"
        />
        <path
          d="M9.621,11.157l2.022-2.987c.337-.498-.02-1.17-.621-1.17H6.978c-.601,0-.958,.672-.621,1.17l2.022,2.987c.297,.439,.945,.439,1.242,0Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareCaretDown;
