import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hospital({
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
          d="M2.5 3.25C2.5 2.28394 3.28374 1.5 4.25 1.5H13.75C14.7163 1.5 15.5 2.28394 15.5 3.25V15.75C15.5 16.1642 15.1642 16.5 14.75 16.5H3.25C2.83579 16.5 2.5 16.1642 2.5 15.75V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 11.25C6.5 10.8358 6.83579 10.5 7.25 10.5H10.75C11.1642 10.5 11.5 10.8358 11.5 11.25V15.75C11.5 16.1642 11.1642 16.5 10.75 16.5H7.25C6.83579 16.5 6.5 16.1642 6.5 15.75V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 4C9.75 3.58579 9.41421 3.25 9 3.25C8.58579 3.25 8.25 3.58579 8.25 4V5.25H7C6.58579 5.25 6.25 5.58579 6.25 6C6.25 6.41421 6.58579 6.75 7 6.75H8.25V8C8.25 8.41421 8.58579 8.75 9 8.75C9.41421 8.75 9.75 8.41421 9.75 8V6.75H11C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25H9.75V4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 15.75C1 15.3358 1.33579 15 1.75 15H16.25C16.6642 15 17 15.3358 17 15.75C17 16.1642 16.6642 16.5 16.25 16.5H1.75C1.33579 16.5 1 16.1642 1 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hospital;
