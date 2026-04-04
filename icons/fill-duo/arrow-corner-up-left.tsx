import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowCornerUpLeft({
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
          d="M10.75 13.5H2C1.586 13.5 1.25 13.164 1.25 12.75C1.25 12.336 1.586 12 2 12H10.75C11.439 12 12 11.439 12 10.75V2C12 1.586 12.336 1.25 12.75 1.25C13.164 1.25 13.5 1.586 13.5 2V10.75C13.5 12.267 12.267 13.5 10.75 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.25 6.00002C16.058 6.00002 15.866 5.92701 15.72 5.78001L12.75 2.81001L9.78001 5.78001C9.48701 6.07301 9.01202 6.07301 8.71902 5.78001C8.42602 5.48701 8.42602 5.01202 8.71902 4.71902L12.219 1.21902C12.512 0.926018 12.987 0.926018 13.28 1.21902L16.78 4.71902C17.073 5.01202 17.073 5.48701 16.78 5.78001C16.634 5.92601 16.442 6.00002 16.25 6.00002Z"
          fill={fill}
        />
        <path
          d="M5.24999 17C5.05799 17 4.86599 16.927 4.71999 16.78L1.21999 13.28C0.926994 12.987 0.926994 12.512 1.21999 12.219L4.71999 8.71902C5.01299 8.42602 5.48799 8.42602 5.78099 8.71902C6.07399 9.01202 6.07399 9.48701 5.78099 9.78001L2.81099 12.75L5.78099 15.72C6.07399 16.013 6.07399 16.488 5.78099 16.781C5.63499 16.927 5.44299 17.001 5.25099 17.001L5.24999 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowCornerUpLeft;
