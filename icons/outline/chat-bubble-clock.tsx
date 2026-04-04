import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleClock({
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
          d="M15.75 7.0006V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H7.75519"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3125 13.9502C16.1934 14.2398 15.9141 14.415 15.6191 14.415C15.5234 14.415 15.4277 14.3969 15.3339 14.3588L13.7148 13.6938C13.4336 13.5781 13.25 13.3042 13.25 13V11.25C13.25 10.8359 13.5859 10.5 14 10.5C14.4141 10.5 14.75 10.8359 14.75 11.25V12.4971L15.9043 12.9712C16.2871 13.1284 16.4707 13.5669 16.3125 13.9502Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleClock;
