import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet3({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V8.5H1V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 8.5V12.75C17 14.2692 15.7692 15.5 14.25 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V8.5H17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 8.25C1 6.73079 2.23079 5.5 3.75 5.5H14.25C15.7692 5.5 17 6.73079 17 8.25C17 8.64438 17 8.85562 17 9.25C17 9.66421 16.6642 10 16.25 10H12.25C12.1122 10 12 10.1122 12 10.25V10.75C12 11.7162 11.2162 12.5 10.25 12.5H7.75C6.78379 12.5 6 11.7162 6 10.75V10.25C6 10.1122 5.88779 10 5.75 10H1.75C1.33579 10 1 9.66421 1 9.25C1 8.85562 1 8.64438 1 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wallet3;
