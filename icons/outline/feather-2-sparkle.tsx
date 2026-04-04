import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2Sparkle({
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
          d="M4.49297 3.492L3.54697 3.17699L3.23097 2.22999C3.12897 1.92399 2.62197 1.92399 2.51997 2.22999L2.20396 3.17699L1.25797 3.492C1.10497 3.543 1.00098 3.686 1.00098 3.848C1.00098 4.01 1.10497 4.15299 1.25797 4.20399L2.20396 4.51899L2.51997 5.466C2.57097 5.619 2.71397 5.72199 2.87497 5.72199C3.03597 5.72199 3.17997 5.618 3.22997 5.466L3.54597 4.51899L4.49197 4.20399C4.64497 4.15299 4.74896 4.01 4.74896 3.848C4.74896 3.686 4.64597 3.543 4.49297 3.492Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M17.658 12.99L16.395 12.569L15.974 11.306C15.837 10.898 15.162 10.898 15.025 11.306L14.604 12.569L13.341 12.99C13.137 13.058 12.999 13.249 12.999 13.464C12.999 13.679 13.137 13.87 13.341 13.938L14.604 14.359L15.025 15.622C15.093 15.826 15.285 15.964 15.5 15.964C15.715 15.964 15.906 15.826 15.975 15.622L16.396 14.359L17.659 13.938C17.863 13.87 18.001 13.679 18.001 13.464C18.001 13.249 17.862 13.058 17.658 12.99Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M6.75 2.5C7.164 2.5 7.5 2.164 7.5 1.75C7.5 1.336 7.164 1 6.75 1C6.336 1 6 1.336 6 1.75C6 2.164 6.336 2.5 6.75 2.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.25 13.75V9.48199C4.25 8.95199 4.461 8.44299 4.836 8.06799L9.72 3.184C11.127 1.777 13.409 1.777 14.816 3.184C16.223 4.591 16.223 6.873 14.816 8.28L9.93201 13.164C9.55701 13.539 9.04801 13.75 8.51801 13.75H8.451"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L8.75 9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Feather2Sparkle;
