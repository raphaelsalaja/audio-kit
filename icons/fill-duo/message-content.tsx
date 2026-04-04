import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageContent({
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
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.76309 14H14.25C15.7695 14 17 12.768 17 11.25V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 6.25C4.25 5.83579 4.58579 5.5 5 5.5H13C13.4142 5.5 13.75 5.83579 13.75 6.25C13.75 6.66421 13.4142 7 13 7H5C4.58579 7 4.25 6.66421 4.25 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 9.25C4.25 8.83579 4.58579 8.5 5 8.5H10.25C10.6642 8.5 11 8.83579 11 9.25C11 9.66421 10.6642 10 10.25 10H5C4.58579 10 4.25 9.66421 4.25 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MessageContent;
