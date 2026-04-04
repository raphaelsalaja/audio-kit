import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notification({
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
          d="M14.5 5.75C15.743 5.75 16.75 4.743 16.75 3.5C16.75 2.257 15.743 1.25 14.5 1.25C13.257 1.25 12.25 2.257 12.25 3.5C12.25 4.743 13.257 5.75 14.5 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 8.7435V13.75C14.75 14.855 13.855 15.75 12.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V5.25C2.25 4.145 3.145 3.25 4.25 3.25H9.2565"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 5.75C15.743 5.75 16.75 4.743 16.75 3.5C16.75 2.257 15.743 1.25 14.5 1.25C13.257 1.25 12.25 2.257 12.25 3.5C12.25 4.743 13.257 5.75 14.5 5.75Z"
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

export default Notification;
