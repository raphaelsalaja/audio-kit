import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Calculator({
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
          d="M12.25 1.75H5.75C4.645 1.75 3.75 2.6454 3.75 3.75V14.25C3.75 15.3546 4.645 16.25 5.75 16.25H12.25C13.355 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.6454 13.355 1.75 12.25 1.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 1.75H5.25C4.1454 1.75 3.25 2.6454 3.25 3.75V14.25C3.25 15.3546 4.1454 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V3.75C14.75 2.6454 13.8546 1.75 12.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 11C6.6642 11 7 10.6642 7 10.25C7 9.8358 6.6642 9.5 6.25 9.5C5.8358 9.5 5.5 9.8358 5.5 10.25C5.5 10.6642 5.8358 11 6.25 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 11C9.4142 11 9.75 10.6642 9.75 10.25C9.75 9.8358 9.4142 9.5 9 9.5C8.5858 9.5 8.25 9.8358 8.25 10.25C8.25 10.6642 8.5858 11 9 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 14C6.6642 14 7 13.6642 7 13.25C7 12.8358 6.6642 12.5 6.25 12.5C5.8358 12.5 5.5 12.8358 5.5 13.25C5.5 13.6642 5.8358 14 6.25 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 14C9.4142 14 9.75 13.6642 9.75 13.25C9.75 12.8358 9.4142 12.5 9 12.5C8.5858 12.5 8.25 12.8358 8.25 13.25C8.25 13.6642 8.5858 14 9 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 4.75H6.25V7.25H11.75V4.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 10.25V13.25"
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

export default Calculator;
