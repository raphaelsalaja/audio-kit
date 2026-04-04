import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronRight({
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
          d="M10.28 4.21999C9.987 3.92699 9.512 3.92699 9.219 4.21999C8.926 4.51299 8.926 4.98803 9.219 5.28103L12.939 9.001L9.219 12.721C8.926 13.014 8.926 13.489 9.219 13.782C9.365 13.928 9.557 14.002 9.749 14.002C9.941 14.002 10.133 13.929 10.279 13.782L14.529 9.53201C14.822 9.23901 14.822 8.76403 14.529 8.47103L10.279 4.22103L10.28 4.21999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.78 8.46999L5.53 4.21999C5.237 3.92699 4.762 3.92699 4.469 4.21999C4.176 4.51299 4.176 4.98803 4.469 5.28103L8.189 9.001L4.469 12.721C4.176 13.014 4.176 13.489 4.469 13.782C4.615 13.928 4.807 14.002 4.999 14.002C5.191 14.002 5.383 13.929 5.529 13.782L9.779 9.53201C10.072 9.23901 10.072 8.76403 9.779 8.47103L9.78 8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DoubleChevronRight;
