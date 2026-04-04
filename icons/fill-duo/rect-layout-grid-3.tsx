import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid3({
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
          d="M7.00012 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V13.25C1.00012 14.7666 2.23352 16 3.75012 16H7.00012V2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 2H7.00012V16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M17.0001 8V4.75C17.0001 3.2334 15.7667 2 14.2501 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V8H17.0001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid3;
