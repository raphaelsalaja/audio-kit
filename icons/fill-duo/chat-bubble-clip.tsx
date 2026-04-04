import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleClip({
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
          d="M11.5 11.25C11.5 10.1458 12.3958 9.25 13.5 9.25C14.6042 9.25 15.5 10.1458 15.5 11.25V13.25C15.5 13.6642 15.1642 14 14.75 14C14.3358 14 14 13.6642 14 13.25V11.25C14 10.9742 13.7758 10.75 13.5 10.75C13.2242 10.75 13 10.9742 13 11.25V13.75C13 14.7168 13.7832 15.5 14.75 15.5C15.7168 15.5 16.5 14.7168 16.5 13.75V11.75C16.5 11.3358 16.8358 11 17.25 11C17.6642 11 18 11.3358 18 11.75V13.75C18 15.5452 16.5452 17 14.75 17C12.9548 17 11.5 15.5452 11.5 13.75V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V9.4465C15.8875 8.43001 14.773 7.75 13.5 7.75C11.5674 7.75 10 9.31736 10 11.25V13.75C10 13.8339 10.0022 13.9172 10.0065 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleClip;
