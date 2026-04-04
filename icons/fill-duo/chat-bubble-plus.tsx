import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubblePlus({
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
          d="M15.5 10.75C15.5 10.3358 15.1642 10 14.75 10C14.3358 10 14 10.3358 14 10.75V12.5H12.25C11.8358 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.8358 14 12.25 14H14V15.75C14 16.1642 14.3358 16.5 14.75 16.5C15.1642 16.5 15.5 16.1642 15.5 15.75V14H17.25C17.6642 14 18 13.6642 18 13.25C18 12.8358 17.6642 12.5 17.25 12.5H15.5V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V9.33567C16.0875 8.82592 15.4568 8.5 14.75 8.5C13.5074 8.5 12.5 9.50736 12.5 10.75V11H12.25C11.0074 11 10 12.0074 10 13.25C10 13.513 10.0451 13.7654 10.128 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubblePlus;
