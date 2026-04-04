import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageArrowRight({
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
          d="M14.7803 10.2197C14.4874 9.92678 14.0126 9.92678 13.7197 10.2197C13.4268 10.5126 13.4268 10.9874 13.7197 11.2803L14.9393 12.5L11.75 12.5C11.3358 12.5 11 12.8358 11 13.25C11 13.6642 11.3358 14 11.75 14L14.9393 14L13.7197 15.2197C13.4268 15.5126 13.4268 15.9874 13.7197 16.2803C14.0126 16.5732 14.4874 16.5732 14.7803 16.2803L17.2803 13.7803C17.5732 13.4874 17.5732 13.0126 17.2803 12.7197L14.7803 10.2197Z"
          fill={fill}
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V10.318L15.841 9.15901C14.9623 8.28033 13.5377 8.28033 12.659 9.15901C12.156 9.66204 11.9409 10.344 12.0138 11H11.75C10.5074 11 9.5 12.0074 9.5 13.25C9.5 13.5443 9.5565 13.8254 9.65926 14.0831L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageArrowRight;
