import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilePlus({
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
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V8.87889C15.6425 8.63957 15.2125 8.5 14.75 8.5C13.5074 8.5 12.5 9.50736 12.5 10.75V11H12.25C11.0074 11 10 12.0074 10 13.25C10 14.4926 11.0074 15.5 12.25 15.5H12.5V15.75C12.5 16.2125 12.6396 16.6425 12.8789 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.8691 6.00098H12C11.45 6.00098 11 5.55098 11 5.00098V1.13101C11.212 1.21806 11.4068 1.34677 11.572 1.512L15.487 5.427C15.6527 5.59266 15.7818 5.7882 15.8691 6.00098Z"
          fill={fill}
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.5 10.75C15.5 10.3358 15.1642 10 14.75 10C14.3358 10 14 10.3358 14 10.75V12.5H12.25C11.8358 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.8358 14 12.25 14H14V15.75C14 16.1642 14.3358 16.5 14.75 16.5C15.1642 16.5 15.5 16.1642 15.5 15.75V14H17.25C17.6642 14 18 13.6642 18 13.25C18 12.8358 17.6642 12.5 17.25 12.5H15.5V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FilePlus;
