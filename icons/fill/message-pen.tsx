import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessagePen({
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
          d="M17.3614 9.72076L17.1937 9.55306L17.026 9.38536C16.3658 8.72376 15.213 8.72426 14.5509 9.38486L11.3897 12.546C11.3091 12.6266 11.2481 12.7242 11.211 12.8316L10.2901 15.5025C10.1963 15.774 10.2657 16.0748 10.4688 16.2774C10.6119 16.4205 10.8033 16.4971 10.9991 16.4971C11.0811 16.4971 11.1637 16.4839 11.2437 16.4561L13.9146 15.5352C14.022 15.4981 14.1197 15.4371 14.2002 15.3565L17.3613 12.1954C17.6919 11.8648 17.874 11.4254 17.874 10.9581C17.874 10.4903 17.692 10.0509 17.3614 9.72076Z"
          fill={secondaryfill}
        />
        <path
          d="M9.01551 14.5973L9.79291 12.3426C9.90423 12.0204 10.0876 11.7267 10.329 11.4853L13.4914 8.32299C14.4213 7.39527 15.8276 7.15754 17 7.61578V4.25C17 2.733 15.767 1.5 14.25 1.5H3.75C2.233 1.5 1 2.733 1 4.25V11.25C1 12.767 2.233 14 3.75 14H5V16.25C5 16.538 5.165 16.801 5.425 16.926C5.529 16.976 5.64 17 5.75 17C5.917 17 6.083 16.944 6.219 16.835L9.01551 14.5973Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessagePen;
