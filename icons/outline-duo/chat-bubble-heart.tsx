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
          d="M13.781 16.197C13.919 16.268 14.08 16.268 14.218 16.197C14.947 15.823 17.249 14.467 17.249 12.263C17.253 11.295 16.458 10.506 15.472 10.5C14.879 10.507 14.328 10.801 13.999 11.286C13.67 10.802 13.118 10.508 12.526 10.5C11.541 10.506 10.746 11.294 10.749 12.263C10.749 14.468 13.053 15.823 13.781 16.197Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V8.2602C15.648 8.25297 15.545 8.24874 15.4415 8.25022C14.9429 8.25697 14.4548 8.35499 14.0001 8.53428C13.5321 8.3497 13.0256 8.2469 12.5123 8.25004C10.3254 8.26338 8.49394 10.0225 8.49897 12.2665C8.49919 12.6104 8.53147 12.9383 8.58939 13.25H6L2.25 16.25V4.75C2.25 3.645 3.145 2.75 4.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChatBubbleHeart;
