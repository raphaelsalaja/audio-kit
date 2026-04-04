import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Purse({
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
          d="M7.5 3C8.052 3 8.5 2.552 8.5 2C8.5 1.448 8.052 1 7.5 1C6.948 1 6.5 1.448 6.5 2C6.5 2.552 6.948 3 7.5 3Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10.5 3C11.052 3 11.5 2.552 11.5 2C11.5 1.448 11.052 1 10.5 1C9.948 1 9.5 1.448 9.5 2C9.5 2.552 9.948 3 10.5 3Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.81289 7.91528L2.8221 11.438C2.2841 13.3511 3.7221 15.25 5.7101 15.25H12.2901C14.2781 15.25 15.7161 13.3521 15.1781 11.438L14.1872 7.91528"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 5C4.603 4.777 6.7 4.625 9 4.625C11.3 4.625 13.397 4.777 15.25 5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Purse;
