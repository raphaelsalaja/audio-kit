import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleFlag({
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
          d="M16.75 9.75H13.25C12.974 9.75 12.75 9.9739 12.75 10.25V12.25C12.75 12.5261 12.974 12.75 13.25 12.75H16.75C17.026 12.75 17.25 12.5261 17.25 12.25V10.25C17.25 9.9739 17.026 9.75 16.75 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V16.25L6 13.25H10.5V12.25V10.25C10.5 8.73122 11.7312 7.5 13.25 7.5H15.75V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.75 16.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 6.75V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 9.75H13.25C12.974 9.75 12.75 9.9739 12.75 10.25V12.25C12.75 12.5261 12.974 12.75 13.25 12.75H16.75C17.026 12.75 17.25 12.5261 17.25 12.25V10.25C17.25 9.9739 17.026 9.75 16.75 9.75Z"
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

export default ChatBubbleFlag;
