import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleArrowRight({
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
          d="M15.2803 10.2197C14.9874 9.92678 14.5126 9.92678 14.2197 10.2197C13.9268 10.5126 13.9268 10.9874 14.2197 11.2803L15.4393 12.5H12.25C11.8358 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.8358 14 12.25 14H15.4393L14.2197 15.2197C13.9268 15.5126 13.9268 15.9874 14.2197 16.2803C14.5126 16.5732 14.9874 16.5732 15.2803 16.2803L17.7803 13.7803C18.0732 13.4874 18.0732 13.0126 17.7803 12.7197L15.2803 10.2197Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V9.31802L16.341 9.15901C15.4623 8.28033 14.0377 8.28033 13.159 9.15901C12.656 9.66204 12.4409 10.344 12.5138 11H12.25C11.0074 11 10 12.0074 10 13.25C10 13.513 10.0451 13.7654 10.128 14H6.26309L2.71852 16.8357C2.49339 17.0158 2.18496 17.0509 1.92511 16.926C1.66526 16.8011 1.5 16.5383 1.5 16.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleArrowRight;
