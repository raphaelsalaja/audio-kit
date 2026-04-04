import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleForward({
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
          d="M13.75 2.75H4C2.895 2.75 2 3.645 2 4.75V16.25L5.75 13.25H13.75C14.855 13.25 15.75 12.355 15.75 11.25V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.5 8.25H3.25C2.698 8.25 2.25 8.698 2.25 9.25V16.25L6 13.25H13.75C14.855 13.25 15.75 12.355 15.75 11.25V4.75C15.75 3.645 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 5.75L10.75 8.25L8.25 10.75"
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

export default ChatBubbleForward;
