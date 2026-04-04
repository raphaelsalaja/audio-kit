import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleUser2({
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
          d="M15.75 0.75H10.75C9.922 0.75 9.25 1.422 9.25 2.25V8.75L12 6.25H15.75C16.578 6.25 17.25 5.578 17.25 4.75V2.25C17.25 1.422 16.578 0.75 15.75 0.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.55103 10.75C5.65559 10.75 6.55103 9.85457 6.55103 8.75C6.55103 7.64543 5.65559 6.75 4.55103 6.75C3.44646 6.75 2.55103 7.64543 2.55103 8.75C2.55103 9.85457 3.44646 10.75 4.55103 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 16C1.275 14.403 2.778 13.25 4.551 13.25C6.324 13.25 7.827 14.403 8.352 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 0.75H10.75C9.922 0.75 9.25 1.422 9.25 2.25V8.75L12 6.25H15.75C16.578 6.25 17.25 5.578 17.25 4.75V2.25C17.25 1.422 16.578 0.75 15.75 0.75Z"
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

export default ChatBubbleUser2;
