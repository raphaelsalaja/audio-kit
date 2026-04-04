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
          d="M3.75 6C2.23079 6 1 7.23079 1 8.75V14.25C1 15.7692 2.23079 17 3.75 17H13.25C14.7692 17 16 15.7692 16 14.25V8.75C16 7.23122 14.7688 6 13.25 6H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 2.25C9 1.00879 10.0088 0 11.25 0H15.75C16.9912 0 18 1.00879 18 2.25V4.25C18 5.49121 16.9912 6.5 15.75 6.5H14.2643L12.2511 8.30801C12.0309 8.50581 11.7149 8.55555 11.4445 8.43496C11.1741 8.31438 11 8.04604 11 7.75V6.48622C9.87612 6.36158 9 5.40672 9 4.25V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 12C6.0523 12 6.5 11.5523 6.5 11C6.5 10.4477 6.0523 10 5.5 10C4.9477 10 4.5 10.4477 4.5 11C4.5 11.5523 4.9477 12 5.5 12Z"
          fill={fill}
        />
        <path
          d="M11.5 12C12.0523 12 12.5 11.5523 12.5 11C12.5 10.4477 12.0523 10 11.5 10C10.9477 10 10.5 10.4477 10.5 11C10.5 11.5523 10.9477 12 11.5 12Z"
          fill={fill}
        />
        <path
          d="M7.5 12H9.5C9.776 12 10 12.224 10 12.5C10 13.328 9.328 14 8.5 14C7.672 14 7 13.328 7 12.5C7 12.224 7.224 12 7.5 12Z"
          fill={fill}
        />
        <path
          d="M6 3.79931C6.44834 3.53995 6.75 3.05519 6.75 2.5C6.75 1.6716 6.0784 1 5.25 1C4.4216 1 3.75 1.6716 3.75 2.5C3.75 3.05519 4.05166 3.53995 4.5 3.79931V6H6V3.79931Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChatBot;
