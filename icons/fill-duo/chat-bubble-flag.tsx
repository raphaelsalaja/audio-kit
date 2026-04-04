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
          d="M13.25 9C12.5599 9 12 9.55959 12 10.25V12.25V16.25C12 16.6642 12.3358 17 12.75 17C13.1642 17 13.5 16.6642 13.5 16.25V13.5H16.75C17.4401 13.5 18 12.9404 18 12.25V10.25C18 9.55959 17.4401 9 16.75 9H13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V7.5H13.25C11.7317 7.5 10.5 8.73093 10.5 10.25V14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleFlag;
