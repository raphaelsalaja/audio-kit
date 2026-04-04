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
          d="M5.25 1C3.73119 1 2.5 2.23119 2.5 3.75V14.25C2.5 15.7688 3.73119 17 5.25 17H12.75C14.2688 17 15.5 15.7688 15.5 14.25V3.75C15.5 2.23119 14.2688 1 12.75 1H5.25ZM7 10.25C7 10.6642 6.6642 11 6.25 11C5.8358 11 5.5 10.6642 5.5 10.25C5.5 9.8358 5.8358 9.5 6.25 9.5C6.6642 9.5 7 9.8358 7 10.25ZM9 11C9.4142 11 9.75 10.6642 9.75 10.25C9.75 9.8358 9.4142 9.5 9 9.5C8.5858 9.5 8.25 9.8358 8.25 10.25C8.25 10.6642 8.5858 11 9 11ZM7 13.25C7 13.6642 6.6642 14 6.25 14C5.8358 14 5.5 13.6642 5.5 13.25C5.5 12.8358 5.8358 12.5 6.25 12.5C6.6642 12.5 7 12.8358 7 13.25ZM9 14C9.4142 14 9.75 13.6642 9.75 13.25C9.75 12.8358 9.4142 12.5 9 12.5C8.5858 12.5 8.25 12.8358 8.25 13.25C8.25 13.6642 8.5858 14 9 14ZM12.25 8C12.6642 8 13 7.66421 13 7.25V4.25C13 3.83579 12.6642 3.5 12.25 3.5H5.75C5.33579 3.5 5 3.83579 5 4.25V7.25C5 7.66421 5.33579 8 5.75 8H12.25ZM11.75 9.5C12.1642 9.5 12.5 9.83579 12.5 10.25V13.25C12.5 13.6642 12.1642 14 11.75 14C11.3358 14 11 13.6642 11 13.25V10.25C11 9.83579 11.3358 9.5 11.75 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Calculator;
