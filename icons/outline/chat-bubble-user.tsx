import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleUser({
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
          d="M15.75 7.1844V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H9.27359"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 12C14.8284 12 15.5 11.3284 15.5 10.5C15.5 9.67157 14.8284 9 14 9C13.1716 9 12.5 9.67157 12.5 10.5C12.5 11.3284 13.1716 12 14 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.1011 17H11.899C11.4923 17 11.1085 16.8013 10.8717 16.4683C10.6393 16.1407 10.5787 15.7207 10.7096 15.3453C11.1979 13.943 12.5201 13.0001 14.0001 13.0001C15.4801 13.0001 16.8023 13.943 17.2911 15.3458C17.4215 15.7208 17.361 16.1407 17.1286 16.4684C16.8918 16.8014 16.5078 17 16.1011 17Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleUser;
