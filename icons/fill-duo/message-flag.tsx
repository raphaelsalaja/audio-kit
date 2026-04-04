import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageFlag({
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
          d="M13.25 9C12.5598 9 12 9.55979 12 10.25V12.25V16.25C12 16.6642 12.3358 17 12.75 17C13.1642 17 13.5 16.6642 13.5 16.25V13.5H16.75C17.4402 13.5 18 12.9402 18 12.25V10.25C18 9.55979 17.4402 9 16.75 9H13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V7.51121C16.9177 7.50379 16.8343 7.5 16.75 7.5H13.25C11.7314 7.5 10.5 8.73136 10.5 10.25V14H9.76309L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageFlag;
