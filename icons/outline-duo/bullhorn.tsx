import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bullhorn({
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
          d="M10 10.75C12.313 10.75 13.7417 13.25 13.7417 13.25V1.75C13.7417 1.75 12.312 4.25 10 4.25H5.75V10.75H10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.805 10.75L9.787 15.397C9.901 15.937 9.556 16.468 9.015 16.582L8.037 16.789C7.497 16.903 6.966 16.558 6.852 16.017L5.75 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 13.25C13.75 13.25 11.813 10.75 9.5 10.75H5C3.205 10.75 1.75 9.295 1.75 7.5C1.75 5.705 3.205 4.25 5 4.25H9.5C11.812 4.25 13.75 1.75 13.75 1.75V13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 4.25V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.3843 6C16.9018 6.2995 17.25 6.8591 17.25 7.5C17.25 8.1409 16.9018 8.7005 16.3843 9"
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

export default Bullhorn;
