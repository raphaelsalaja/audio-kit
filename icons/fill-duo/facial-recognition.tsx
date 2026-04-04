import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FacialRecognition({
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
          d="M9 5.5C9.41421 5.5 9.75 5.83579 9.75 6.25V8.75C9.75 9.71621 8.96621 10.5 8 10.5C7.58579 10.5 7.25 10.1642 7.25 9.75C7.25 9.33579 7.58579 9 8 9C8.13779 9 8.25 8.88779 8.25 8.75V6.25C8.25 5.83579 8.58579 5.5 9 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 5.5C6.16421 5.5 6.5 5.83579 6.5 6.25V7.5C6.5 7.91421 6.16421 8.25 5.75 8.25C5.33579 8.25 5 7.91421 5 7.5V6.25C5 5.83579 5.33579 5.5 5.75 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 5.5C12.6642 5.5 13 5.83579 13 6.25V7.5C13 7.91421 12.6642 8.25 12.25 8.25C11.8358 8.25 11.5 7.91421 11.5 7.5V6.25C11.5 5.83579 11.8358 5.5 12.25 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.8497 11.5495C12.0985 11.8807 12.0317 12.3509 11.7005 12.5997C10.9481 13.1648 10.0121 13.5 9.00001 13.5C7.98825 13.5 7.05095 13.165 6.29909 12.5993C5.9681 12.3503 5.90167 11.8801 6.1507 11.5491C6.39974 11.2181 6.86994 11.1517 7.20093 11.4007C7.70107 11.777 8.32378 12 9.00001 12C9.67594 12 10.2979 11.7772 10.7996 11.4003C11.1307 11.1516 11.6009 11.2184 11.8497 11.5495Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 3.5C4.05921 3.5 3.5 4.05921 3.5 4.75V6.75C3.5 7.16421 3.16421 7.5 2.75 7.5C2.33579 7.5 2 7.16421 2 6.75V4.75C2 3.23079 3.23079 2 4.75 2H6.75C7.16421 2 7.5 2.33579 7.5 2.75C7.5 3.16421 7.16421 3.5 6.75 3.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5 2.75C10.5 2.33579 10.8358 2 11.25 2H13.25C14.7692 2 16 3.23079 16 4.75V6.75C16 7.16421 15.6642 7.5 15.25 7.5C14.8358 7.5 14.5 7.16421 14.5 6.75V4.75C14.5 4.05921 13.9408 3.5 13.25 3.5H11.25C10.8358 3.5 10.5 3.16421 10.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 10.5C15.6642 10.5 16 10.8358 16 11.25V13.25C16 14.7692 14.7692 16 13.25 16H11.25C10.8358 16 10.5 15.6642 10.5 15.25C10.5 14.8358 10.8358 14.5 11.25 14.5H13.25C13.9408 14.5 14.5 13.9408 14.5 13.25V11.25C14.5 10.8358 14.8358 10.5 15.25 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 10.5C3.16421 10.5 3.5 10.8358 3.5 11.25V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H6.75C7.16421 14.5 7.5 14.8358 7.5 15.25C7.5 15.6642 7.16421 16 6.75 16H4.75C3.23079 16 2 14.7692 2 13.25V11.25C2 10.8358 2.33579 10.5 2.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FacialRecognition;
