import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader5({
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
          d="m11.2981,6.7019l2.8284-2.8284c-1.312-1.312-3.1245-2.1235-5.1265-2.1235v4c.8975,0,1.71.3638,2.2981.9519Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.2981,11.2981l2.8284,2.8284c1.312-1.312,2.1235-3.1245,2.1235-5.1265h-4c0,.8975-.3638,1.71-.9519,2.2981Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.7019,11.2981l-2.8284,2.8284c1.312,1.312,3.1245,2.1235,5.1265,2.1235v-4c-.8975,0-1.71-.3638-2.2981-.9519Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.7019,6.7019l-2.8284-2.8284c-1.312,1.312-2.1235,3.1245-2.1235,5.1265h4c0-.8975.3638-1.71.9519-2.2981Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="3.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="1.75"
          y2="5.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="12.25"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.25"
          x2="12.25"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="1.75"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.1265"
          x2="11.2981"
          y1="14.1265"
          y2="11.2981"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.7019"
          x2="3.8735"
          y1="6.7019"
          y2="3.8735"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.1265"
          x2="11.2981"
          y1="3.8735"
          y2="6.7019"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.7019"
          x2="3.8735"
          y1="11.2981"
          y2="14.1265"
        />
      </g>
    </svg>
  );
}

export default Loader5;
