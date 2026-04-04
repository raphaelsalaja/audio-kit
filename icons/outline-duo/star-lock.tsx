import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarLock({
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
          d="m15.25,12.75h-4c-.5523,0-1,.4477-1,1v1.5c0,.5523.4477,1,1,1h4c.5523,0,1-.4477,1-1v-1.5c0-.5523-.4477-1-1-1Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.0056,13.7075c.0151-1.1118.6034-2.1145,1.5018-2.6899.1201-1.96,2.028-3.6293,4.1456-3.6293.7111,0,1.5128-.2122,2.0799.133l.5171-.5041-5.01-.728-2.24-4.5391-2.24,4.5391-5.01.728,3.625,3.5339-.856,4.989,3.4865-1.8325Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.75,12.75v-1.5c0-.828.672-1.5,1.5-1.5h0c.828,0,1.5.672,1.5,1.5v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="7.25 14.1044 4.519 15.54 5.375 10.551 1.75 7.017 6.76 6.289 9 1.75 11.24 6.289 16.25 7.017"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="3.5"
          width="6"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="12.75"
        />
      </g>
    </svg>
  );
}

export default StarLock;
