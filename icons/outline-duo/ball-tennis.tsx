import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallTennis({
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
          d="M2.12193 9.37198C6.12599 9.37198 9.37193 6.12604 9.37193 2.12198C9.37193 2.00024 9.36893 1.8792 9.36299 1.75893C13.0781 1.94213 16.0578 4.92182 16.241 8.63696C16.1208 8.63103 15.9997 8.62803 15.878 8.62803C11.8739 8.62803 8.62799 11.874 8.62799 15.878C8.62799 15.9998 8.63099 16.1208 8.63692 16.2411C4.9218 16.0578 1.94213 13.0782 1.75891 9.36305C1.87917 9.36898 2.0002 9.37198 2.12193 9.37198Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.34799 1.76C9.44099 3.729 8.73599 5.729 7.23299 7.232C5.72899 8.736 3.72999 9.441 1.76099 9.347"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.24 8.652C14.271 8.559 12.271 9.264 10.768 10.767C9.265 12.27 8.559 14.27 8.653 16.239"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default BallTennis;
