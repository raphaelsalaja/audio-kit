import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Barcode({
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
          d="M4.5 3.75C4.5 3.33579 4.83579 3 5.25 3H5.75C6.16421 3 6.5 3.33579 6.5 3.75V12.25C6.5 12.6642 6.16421 13 5.75 13H5.25C4.83579 13 4.5 12.6642 4.5 12.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 3.75C11 3.33579 11.3358 3 11.75 3H12.75C13.1642 3 13.5 3.33579 13.5 3.75V12.25C13.5 12.6642 13.1642 13 12.75 13H11.75C11.3358 13 11 12.6642 11 12.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 3C9.16421 3 9.5 3.33579 9.5 3.75V14.25C9.5 14.6642 9.16421 15 8.75 15C8.33579 15 8 14.6642 8 14.25V3.75C8 3.33579 8.33579 3 8.75 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 3C16.1642 3 16.5 3.33579 16.5 3.75V14.25C16.5 14.6642 16.1642 15 15.75 15C15.3358 15 15 14.6642 15 14.25V3.75C15 3.33579 15.3358 3 15.75 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 3C2.66421 3 3 3.33579 3 3.75V14.25C3 14.6642 2.66421 15 2.25 15C1.83579 15 1.5 14.6642 1.5 14.25V3.75C1.5 3.33579 1.83579 3 2.25 3Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Barcode;
