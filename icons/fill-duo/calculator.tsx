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
          d="M12.75 1H5.25C3.73122 1 2.5 2.23122 2.5 3.75V14.25C2.5 15.7688 3.73122 17 5.25 17H12.75C14.2688 17 15.5 15.7688 15.5 14.25V3.75C15.5 2.23122 14.2688 1 12.75 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25 11C6.66421 11 7 10.6642 7 10.25C7 9.83579 6.66421 9.5 6.25 9.5C5.83579 9.5 5.5 9.83579 5.5 10.25C5.5 10.6642 5.83579 11 6.25 11Z"
          fill={fill}
        />
        <path
          d="M9 11C9.41421 11 9.75 10.6642 9.75 10.25C9.75 9.83579 9.41421 9.5 9 9.5C8.58579 9.5 8.25 9.83579 8.25 10.25C8.25 10.6642 8.58579 11 9 11Z"
          fill={fill}
        />
        <path
          d="M6.25 14C6.66421 14 7 13.6642 7 13.25C7 12.8358 6.66421 12.5 6.25 12.5C5.83579 12.5 5.5 12.8358 5.5 13.25C5.5 13.6642 5.83579 14 6.25 14Z"
          fill={fill}
        />
        <path
          d="M9 14C9.41421 14 9.75 13.6642 9.75 13.25C9.75 12.8358 9.41421 12.5 9 12.5C8.58579 12.5 8.25 12.8358 8.25 13.25C8.25 13.6642 8.58579 14 9 14Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5H5.75C5.33579 3.5 5 3.83579 5 4.25V7.25C5 7.66421 5.33579 8 5.75 8H12.25C12.6642 8 13 7.66421 13 7.25V4.25C13 3.83579 12.6642 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M11.75 9.5C11.3359 9.5 11 9.8359 11 10.25V13.25C11 13.6641 11.3359 14 11.75 14C12.1641 14 12.5 13.6641 12.5 13.25V10.25C12.5 9.8359 12.1641 9.5 11.75 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Calculator;
