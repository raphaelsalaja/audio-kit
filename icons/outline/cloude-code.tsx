import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudeCode({
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
          d="m9.705,7.5c.687-.767,1.684-1.25,2.795-1.25.333,0,.657.059.964.141"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.3122,12.457c.5766-.6594.9378-1.5122.9378-2.457,0-1.7361-1.185-3.1821-2.786-3.6089-.186-2.3142-2.102-4.1411-4.464-4.1411-2.485,0-4.5,2.0151-4.5,4.5,0,.3501.049.686.124,1.0129-1.597.0671-2.874,1.374-2.874,2.9871,0,.7737.3008,1.4717.7816,2.0037"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="10.5 16.25 12.75 14 10.5 11.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="7.5 16.25 5.25 14 7.5 11.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CloudeCode;
