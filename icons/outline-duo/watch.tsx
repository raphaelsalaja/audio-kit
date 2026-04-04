import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch({
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
          d="M11.75 4.75H6.25C5.145 4.75 4.25 5.645 4.25 6.75V11.25C4.25 12.355 5.145 13.25 6.25 13.25H11.75C12.855 13.25 13.75 12.355 13.75 11.25V6.75C13.75 5.645 12.855 4.75 11.75 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6 4.75L6.36099 2.586C6.44099 2.104 6.859 1.75 7.347 1.75H10.653C11.142 1.75 11.559 2.103 11.639 2.586L12 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 13.25L6.36099 15.414C6.44099 15.896 6.859 16.25 7.347 16.25H10.653C11.142 16.25 11.559 15.897 11.639 15.414L12 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7V9L11 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 4.75H6.25C5.145 4.75 4.25 5.645 4.25 6.75V11.25C4.25 12.355 5.145 13.25 6.25 13.25H11.75C12.855 13.25 13.75 12.355 13.75 11.25V6.75C13.75 5.645 12.855 4.75 11.75 4.75Z"
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

export default Watch;
