import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleHeart({
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
          d="M15.75 7.5327V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H7.8314"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.197C13.919 16.268 14.08 16.268 14.218 16.197C14.947 15.823 17.249 14.467 17.249 12.263C17.253 11.295 16.458 10.506 15.472 10.5C14.879 10.507 14.328 10.801 13.999 11.286C13.67 10.802 13.118 10.508 12.526 10.5C11.541 10.506 10.746 11.294 10.749 12.263C10.749 14.468 13.053 15.823 13.781 16.197Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleHeart;
