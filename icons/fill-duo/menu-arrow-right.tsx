import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuArrowRight({
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
          d="M9.25 14H2.25C1.836 14 1.5 14.336 1.5 14.75C1.5 15.164 1.836 15.5 2.25 15.5H9.25C9.664 15.5 10 15.164 10 14.75C10 14.336 9.664 14 9.25 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.25 4H9.25C9.664 4 10 3.664 10 3.25C10 2.836 9.664 2.5 9.25 2.5H2.25C1.836 2.5 1.5 2.836 1.5 3.25C1.5 3.664 1.836 4 2.25 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.03 5.21999C12.737 4.92699 12.262 4.92699 11.969 5.21999C11.676 5.51299 11.676 5.98803 11.969 6.28103L13.939 8.251H2.25C1.836 8.251 1.5 8.587 1.5 9.001C1.5 9.415 1.836 9.751 2.25 9.751H13.939L11.969 11.721C11.676 12.014 11.676 12.489 11.969 12.782C12.115 12.928 12.307 13.002 12.499 13.002C12.691 13.002 12.883 12.929 13.029 12.782L16.279 9.53201C16.572 9.23901 16.572 8.76403 16.279 8.47103L13.029 5.22103L13.03 5.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuArrowRight;
