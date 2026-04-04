import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarList({
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
          d="m9,1.75l2.24,4.539,5.01.728-1.25,1.983h-4c-1.2426,0-2.25,1.0074-2.25,2.25,0,.7068.3259,1.3375.8357,1.75l-.9621.7647-4.1045,1.7753.856-4.989-3.625-3.534,5.01-.728,2.24-4.539Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11"
          x2="16"
          y1="14.75"
          y2="14.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11"
          x2="16"
          y1="11.25"
          y2="11.25"
        />
        <polyline
          fill="none"
          points="14.9857 8.25 16.25 7.0171 11.24 6.2891 9 1.75 6.76 6.2891 1.75 7.0171 5.375 10.551 4.519 15.54 8.2528 13.5776"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default StarList;
