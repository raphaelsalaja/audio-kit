import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChefHat({
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
          d="M4 14V15.25C4 16.215 4.785 17 5.75 17H12.25C13.215 17 14 16.215 14 15.25V14H4Z"
          fill={secondaryfill}
        />
        <path
          d="M3.99999 10.425V12.5H8.25V10.75C8.25 10.3358 8.58579 10 9 10C9.41421 10 9.75 10.3358 9.75 10.75V12.5H14V10.425C14.822 10.258 15.569 9.819 16.12 9.164C16.834 8.315 17.134 7.194 16.942 6.086C16.684 4.594 15.515 3.387 14.032 3.081C13.502 2.972 12.986 2.979 12.488 3.083C11.806 1.848 10.507 1 8.99999 1C7.49299 1 6.19399 1.848 5.51199 3.082C5.01299 2.978 4.49799 2.971 3.96899 3.081C2.48699 3.386 1.31699 4.593 1.05799 6.084C0.86599 7.192 1.16499 8.314 1.87899 9.164C2.42999 9.819 3.17799 10.257 3.99999 10.425Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChefHat;
