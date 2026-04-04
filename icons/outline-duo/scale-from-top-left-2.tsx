import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromTopLeft2({
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
          d="M6.75 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V6.75C2.75 7.85457 3.64543 8.75 4.75 8.75H6.75C7.85457 8.75 8.75 7.85457 8.75 6.75V4.75C8.75 3.64543 7.85457 2.75 6.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 10.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V4.75C15.25 3.645 14.355 2.75 13.25 2.75H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V6.75C2.75 7.85457 3.64543 8.75 4.75 8.75H6.75C7.85457 8.75 8.75 7.85457 8.75 6.75V4.75C8.75 3.64543 7.85457 2.75 6.75 2.75Z"
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

export default ScaleFromTopLeft2;
