import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScrollX({
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
          d="M4.77999 5.71999C4.48699 5.42699 4.01199 5.42699 3.71899 5.71999L0.969994 8.46999C0.676994 8.76299 0.676994 9.23803 0.969994 9.53103L3.71999 12.281C3.86599 12.427 4.05799 12.501 4.24999 12.501C4.44199 12.501 4.63399 12.428 4.77999 12.281C5.07299 11.988 5.07299 11.513 4.77999 11.22L2.55999 9.00002L4.77999 6.78005C5.07299 6.48705 5.07299 6.01299 4.77999 5.71999Z"
          fill={fill}
        />
        <path
          d="M14.28 5.71999C13.987 5.42699 13.512 5.42699 13.219 5.71999C12.926 6.01299 12.926 6.48803 13.219 6.78103L15.439 9.001L13.219 11.221C12.926 11.514 12.926 11.989 13.219 12.282C13.365 12.428 13.557 12.502 13.749 12.502C13.941 12.502 14.133 12.429 14.279 12.282L17.029 9.53201C17.322 9.23901 17.322 8.76397 17.029 8.47097L14.279 5.72097L14.28 5.71999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ScrollX;
