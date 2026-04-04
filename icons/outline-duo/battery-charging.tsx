import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryCharging({
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
          d="M6.76338 4.25V4.7187L4.43035 7.92661C3.9326 8.61103 3.86098 9.51687 4.245 10.271C4.62539 11.018 5.38909 11.491 6.22598 11.4999L5.56994 13.6035C5.55533 13.6522 5.54244 13.701 5.53125 13.75H3.75C2.64543 13.75 1.75 12.8546 1.75 11.75V6.25C1.75 5.14543 2.64543 4.25 3.75 4.25H6.76338Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.43 4.39653C12.4446 4.34782 12.4575 4.29896 12.4687 4.25H13.75C14.8546 4.25 15.75 5.14543 15.75 6.25V11.75C15.75 12.8546 14.8546 13.75 13.75 13.75H11.213V13.3139L13.5697 10.0734C14.0674 9.38897 14.139 8.48313 13.755 7.729C13.3746 6.98201 12.6109 6.50902 11.774 6.50013L12.43 4.39653Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.7921 13.75H3.75C2.645 13.75 1.75 12.855 1.75 11.75V6.25C1.75 5.145 2.645 4.25 3.75 4.25H6.1767"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.2079 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V11.75C15.75 12.855 14.855 13.75 13.75 13.75H11.8233"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 7.75H15.75V10.25H17.25V7.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 14.25L11.75 8.75H8.75L10.25 3.75L6.25 9.25H9.25L7.75 14.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BatteryCharging;
