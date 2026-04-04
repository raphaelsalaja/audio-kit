import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid4({
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
          d="M11.0001 2H14.2501C15.7667 2 17.0001 3.2334 17.0001 4.75V13.25C17.0001 14.7666 15.7667 16 14.2501 16H11.0001V2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75009 2H11.0001V16H3.75009C2.23349 16 1.00009 14.7666 1.00009 13.25V4.75C1.00009 3.2334 2.23349 2 3.75009 2Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M1.00009 8V4.75C1.00009 3.2334 2.23349 2 3.75009 2H14.2501C15.7667 2 17.0001 3.2334 17.0001 4.75V8H1.00009Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid4;
