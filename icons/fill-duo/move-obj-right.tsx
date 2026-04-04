import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjRight({
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
          d="M4.25 2H3.25C2.2835 2 1.5 2.7835 1.5 3.75V14.25C1.5 15.2165 2.2835 16 3.25 16H4.25C5.2165 16 6 15.2165 6 14.25V3.75C6 2.7835 5.2165 2 4.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.03 5.21999C12.737 4.92699 12.262 4.92699 11.969 5.21999C11.676 5.51299 11.676 5.98803 11.969 6.28103L13.939 8.251H8.25C7.836 8.251 7.5 8.587 7.5 9.001C7.5 9.415 7.836 9.751 8.25 9.751H13.939L11.969 11.721C11.676 12.014 11.676 12.489 11.969 12.782C12.115 12.928 12.307 13.002 12.499 13.002C12.691 13.002 12.883 12.929 13.029 12.782L16.279 9.53201C16.572 9.23901 16.572 8.76403 16.279 8.47103L13.029 5.22103L13.03 5.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjRight;
