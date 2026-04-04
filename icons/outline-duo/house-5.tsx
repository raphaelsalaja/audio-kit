import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House5({
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
          d="M2.655 6.45L9 1.75L15.345 6.45C15.6 6.639 15.75 6.937 15.75 7.254V13.75C15.75 14.855 14.855 15.75 13.75 15.75H8.73276V11.1483C8.73276 10.3197 8.06103 9.64798 7.23241 9.64798C6.40379 9.64798 5.73205 10.3197 5.73205 11.1483V15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V7.254C2.25 6.937 2.4 6.639 2.655 6.45Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 15.75V11.25C5.75 10.4216 6.4216 9.75 7.25 9.75C8.0784 9.75 8.75 10.4216 8.75 11.25V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9.75H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.655 6.45L9 1.75L15.345 6.45C15.6 6.639 15.75 6.937 15.75 7.254V13.75C15.75 14.855 14.855 15.75 13.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V7.254C2.25 6.937 2.4 6.639 2.655 6.45Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 2.75V5.269"
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

export default House5;
