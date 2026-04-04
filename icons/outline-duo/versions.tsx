import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Versions({
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
          d="M10.25 15.75H13.75C14.8546 15.75 15.75 14.8546 15.75 13.75L15.75 4.25C15.75 3.14543 14.8546 2.25 13.75 2.25H10.25C9.14543 2.25 8.25 3.14543 8.25 4.25L8.25 13.75C8.25 14.8546 9.14543 15.75 10.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.813 12.75H3.75C2.645 12.75 1.75 11.855 1.75 10.75V7.25C1.75 6.145 2.645 5.25 3.75 5.25H4.814"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.314 14.25H6.75C5.645 14.25 4.75 13.355 4.75 12.25V5.75C4.75 4.645 5.645 3.75 6.75 3.75H8.314"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 15.75H13.75C14.8546 15.75 15.75 14.8546 15.75 13.75L15.75 4.25C15.75 3.14543 14.8546 2.25 13.75 2.25H10.25C9.14543 2.25 8.25 3.14543 8.25 4.25L8.25 13.75C8.25 14.8546 9.14543 15.75 10.25 15.75Z"
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

export default Versions;
