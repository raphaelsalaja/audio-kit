import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Office3({
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
          d="M7.56788 0.89724C8.72116 0.409204 10 1.2559 10 2.509V6H8.75C7.78379 6 7 6.78379 7 7.75V16.25C7 16.6631 7.33394 16.9981 7.74658 17H2.75C2.33579 17 2 16.6642 2 16.25V4.41199C2 3.7099 2.41973 3.07374 3.06862 2.79992L7.56788 0.89724Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.75 6C7.78379 6 7 6.78379 7 7.75V16.25C7 16.6642 7.33579 17 7.75 17H15.25C15.6642 17 16 16.6642 16 16.25V7.75C16 6.78379 15.2162 6 14.25 6H8.75ZM10.25 9C10.6642 9 11 9.33579 11 9.75V10.25C11 10.6642 10.6642 11 10.25 11C9.83579 11 9.5 10.6642 9.5 10.25V9.75C9.5 9.33579 9.83579 9 10.25 9ZM13.5 9.75C13.5 9.33579 13.1642 9 12.75 9C12.3358 9 12 9.33579 12 9.75V10.25C12 10.6642 12.3358 11 12.75 11C13.1642 11 13.5 10.6642 13.5 10.25V9.75ZM10.25 12C10.6642 12 11 12.3358 11 12.75V13.25C11 13.6642 10.6642 14 10.25 14C9.83579 14 9.5 13.6642 9.5 13.25V12.75C9.5 12.3358 9.83579 12 10.25 12ZM13.5 12.75C13.5 12.3358 13.1642 12 12.75 12C12.3358 12 12 12.3358 12 12.75V13.25C12 13.6642 12.3358 14 12.75 14C13.1642 14 13.5 13.6642 13.5 13.25V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 16.25C1 15.8358 1.33579 15.5 1.75 15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H1.75C1.33579 17 1 16.6642 1 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Office3;
