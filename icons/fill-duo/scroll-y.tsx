import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScrollY({
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
          d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.78001 4.78005L9.00002 2.56008L11.22 4.78005C11.366 4.92605 11.558 5.00002 11.75 5.00002C11.942 5.00002 12.134 4.92705 12.28 4.78005C12.573 4.48705 12.573 4.01202 12.28 3.71902L9.53001 0.969994C9.23701 0.676994 8.76202 0.676994 8.46902 0.969994L5.71902 3.71999C5.42602 4.01299 5.42602 4.48803 5.71902 4.78103C6.01202 5.07403 6.48701 5.07305 6.78001 4.78005Z"
          fill={fill}
        />
        <path
          d="M11.22 13.22L9.00002 15.44L6.78001 13.22C6.48701 12.927 6.01202 12.927 5.71902 13.22C5.42602 13.513 5.42602 13.988 5.71902 14.281L8.46902 17.031C8.61502 17.177 8.80702 17.251 8.99902 17.251C9.19102 17.251 9.38302 17.178 9.52902 17.031L12.279 14.281C12.572 13.988 12.572 13.513 12.279 13.22C11.986 12.927 11.511 12.927 11.218 13.22H11.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ScrollY;
