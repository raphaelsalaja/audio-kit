import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBot({
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
          d="M15.75 0.75H11.25C10.423 0.75 9.75 1.423 9.75 2.25V4.25C9.75 5.077 10.423 5.75 11.25 5.75H11.75V7.75L13.977 5.75H15.75C16.577 5.75 17.25 5.077 17.25 4.25V2.25C17.25 1.423 16.577 0.75 15.75 0.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 0.75H11.25C10.423 0.75 9.75 1.423 9.75 2.25V4.25C9.75 5.077 10.423 5.75 11.25 5.75H11.75V7.75L13.977 5.75H15.75C16.577 5.75 17.25 5.077 17.25 4.25V2.25C17.25 1.423 16.577 0.75 15.75 0.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.25V14.25C15.25 15.355 14.355 16.25 13.25 16.25H3.75C2.645 16.25 1.75 15.355 1.75 14.25V8.75C1.75 7.645 2.645 6.75 3.75 6.75H8.13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 12C6.05228 12 6.5 11.5523 6.5 11C6.5 10.4477 6.05228 10 5.5 10C4.94772 10 4.5 10.4477 4.5 11C4.5 11.5523 4.94772 12 5.5 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 12C12.0523 12 12.5 11.5523 12.5 11C12.5 10.4477 12.0523 10 11.5 10C10.9477 10 10.5 10.4477 10.5 11C10.5 11.5523 10.9477 12 11.5 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.5 12H9.5C9.776 12 10 12.224 10 12.5C10 13.328 9.328 14 8.5 14C7.672 14 7 13.328 7 12.5C7 12.224 7.224 12 7.5 12Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 3.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 4C6.07843 4 6.75 3.32843 6.75 2.5C6.75 1.67157 6.07843 1 5.25 1C4.42157 1 3.75 1.67157 3.75 2.5C3.75 3.32843 4.42157 4 5.25 4Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBot;
