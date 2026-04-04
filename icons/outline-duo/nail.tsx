import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nail({
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
          d="M6.75 2.552C6.75 2.191 6.939 1.848 7.259 1.681C7.663 1.47 8.259 1.25101 9 1.25101C9.258 1.25101 9.96 1.27801 10.723 1.67101C11.05 1.84001 11.25 2.188 11.25 2.556V8C11.25 9.105 10.355 10 9.25 10H8.75C7.645 10 6.75 9.105 6.75 8V2.552Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 14.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.253 3.56699C12.74 4.36999 13.75 5.94199 13.75 7.74999V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 15.75V7.75C4.25 5.946 5.255 4.378 6.736 3.573"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.552C6.75 2.191 6.939 1.848 7.259 1.681C7.663 1.47 8.259 1.25101 9 1.25101C9.258 1.25101 9.96 1.27801 10.723 1.67101C11.05 1.84001 11.25 2.188 11.25 2.556V8C11.25 9.105 10.355 10 9.25 10H8.75C7.645 10 6.75 9.105 6.75 8V2.552Z"
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

export default Nail;
