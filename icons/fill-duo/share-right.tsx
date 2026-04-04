import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareRight({
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
          d="M11.75 3.5H4.75C3.233 3.5 2 4.733 2 6.25V13.25C2 14.767 3.233 16 4.75 16H11.75C13.267 16 14.5 14.767 14.5 13.25V6.25C14.5 4.733 13.267 3.5 11.75 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.53 1.21999C13.237 0.926994 12.762 0.926994 12.469 1.21999C12.176 1.51299 12.176 1.98803 12.469 2.28103L14.439 4.251H12.75C10.131 4.251 8 6.382 8 9.001C8 9.415 8.336 9.751 8.75 9.751C9.164 9.751 9.5 9.415 9.5 9.001C9.5 7.209 10.958 5.751 12.75 5.751H14.439L12.469 7.72097C12.176 8.01397 12.176 8.48901 12.469 8.78201C12.615 8.92801 12.807 9.00198 12.999 9.00198C13.191 9.00198 13.383 8.92901 13.529 8.78201L16.779 5.53201C17.072 5.23901 17.072 4.76397 16.779 4.47097L13.529 1.22097L13.53 1.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareRight;
