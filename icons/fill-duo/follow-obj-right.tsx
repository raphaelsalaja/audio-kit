import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjRight({
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
          d="M14.25 2H13.25C12.2835 2 11.5 2.7835 11.5 3.75V14.25C11.5 15.2165 12.2835 16 13.25 16H14.25C15.2165 16 16 15.2165 16 14.25V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.53 5.21999C6.237 4.92699 5.762 4.92699 5.469 5.21999C5.176 5.51299 5.176 5.98803 5.469 6.28103L7.439 8.251H1.75C1.336 8.251 1 8.587 1 9.001C1 9.415 1.336 9.751 1.75 9.751H7.439L5.469 11.721C5.176 12.014 5.176 12.489 5.469 12.782C5.615 12.928 5.807 13.002 5.999 13.002C6.191 13.002 6.383 12.929 6.529 12.782L9.779 9.53201C10.072 9.23901 10.072 8.76403 9.779 8.47103L6.529 5.22103L6.53 5.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjRight;
