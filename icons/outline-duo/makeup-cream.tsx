import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MakeupCream({
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
          d="M10.9636 1.75C13.8832 1.75 16.25 4.11682 16.25 7.03644C16.25 8.14606 15.9081 9.17583 15.324 10.0262C15.0879 10.3698 14.6602 10.9102 14.5 10.0747V9C14.5 7.75265 13.8085 6.8429 13.1695 6.29317C12.7778 5.95626 12.3302 5.68277 11.8636 5.46117C11.2184 4.5247 10.147 3.896 8.89599 3.896C8.20649 3.896 7.78148 3.69774 7.31891 3.20719C8.2673 2.30425 9.5507 1.75 10.9636 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 9C12.25 10.2426 9.8995 11.25 7 11.25C4.10051 11.25 1.75 10.2426 1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 11.5C1.75 12.743 4.101 13.75 7 13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.234 7.228C11.461 7.64 12.25 8.281 12.25 9C12.25 10.243 9.899 11.25 7 11.25C4.101 11.25 1.75 10.243 1.75 9C1.75 8.276 2.548 7.632 3.788 7.22"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.014 8.25C10.163 8.043 10.263 7.796 10.264 7.549C10.264 6.774 9.65101 6.146 8.89601 6.146H7.35701C6.54601 6.146 5.84601 5.564 5.68101 4.75C5.22101 4.78 4.78501 4.969 4.44301 5.285C3.60201 6.061 3.50801 7.388 4.26501 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.0751C15.878 9.2111 16.25 8.1503 16.25 7C16.25 4.101 13.899 1.75 11 1.75C9.8473 1.75 8.791 2.13 7.9303 2.7643"
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

export default MakeupCream;
