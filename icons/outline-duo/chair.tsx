import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair({
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
          d="M5.25 3.75V8H5.254C6.664 7.8156 7.928 7.756 9 7.756C10.358 7.756 11.612 7.8518 12.745 8H12.75V3.75C12.75 2.645 11.855 1.75 10.75 1.75H7.25C6.145 1.75 5.25 2.645 5.25 3.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 12.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 16.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.0376 10.4496C13.4572 10.0817 11.4038 9.75598 9.00003 9.75598C7.39413 9.75598 5.31782 9.90118 2.96252 10.4496"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 7.25V3.75C5.25 2.645 6.145 1.75 7.25 1.75H10.75C11.855 1.75 12.75 2.645 12.75 3.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 6.75L14.969 10.9981C14.8439 11.999 13.9931 12.75 12.9844 12.75H5.01549C4.00689 12.75 3.15608 11.9989 3.03088 10.9981L2.49988 6.75"
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

export default Chair;
