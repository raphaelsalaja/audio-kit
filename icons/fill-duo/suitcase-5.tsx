import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Suitcase5({
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
          d="M3.75 4C2.23079 4 1 5.23079 1 6.75V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.7692 16 17 14.7692 17 13.25V6.75C17 5.23079 15.7692 4 14.25 4H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 8.75C7 8.05979 7.55979 7.5 8.25 7.5H9.75C10.4402 7.5 11 8.05979 11 8.75V9H17V10.5H11V10.75C11 11.4402 10.4402 12 9.75 12H8.25C7.55979 12 7 11.4402 7 10.75V10.5H1V9H7V8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Suitcase5;
