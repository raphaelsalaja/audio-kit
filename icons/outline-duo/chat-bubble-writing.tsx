import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleWriting({
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
          d="M13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V16.25L6 13.25H13.75C14.855 13.25 15.75 12.355 15.75 11.25V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V16.25L6 13.25H13.75C14.855 13.25 15.75 12.355 15.75 11.25V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C8.448 9 8 8.551 8 8C8 7.449 8.448 7 9 7C9.552 7 10 7.449 10 8C10 8.551 9.552 9 9 9Z"
          fill={fill}
          opacity="0.75"
          stroke="none"
        />
        <path
          d="M5.5 9C4.948 9 4.5 8.551 4.5 8C4.5 7.449 4.948 7 5.5 7C6.052 7 6.5 7.449 6.5 8C6.5 8.551 6.052 9 5.5 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 9C11.948 9 11.5 8.551 11.5 8C11.5 7.449 11.948 7 12.5 7C13.052 7 13.5 7.449 13.5 8C13.5 8.551 13.052 9 12.5 9Z"
          fill={fill}
          opacity="0.5"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleWriting;
