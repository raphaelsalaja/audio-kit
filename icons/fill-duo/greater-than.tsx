import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GreaterThan({
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
          d="M3.10552 2.36639C3.31739 2.01046 3.77768 1.89367 4.13361 2.10553L14.6336 8.35553C14.8608 8.49076 15 8.73561 15 9C15 9.26438 14.8608 9.50924 14.6336 9.64447L4.13361 15.8945C3.77768 16.1063 3.31739 15.9895 3.10552 15.6336C2.89366 15.2777 3.01045 14.8174 3.36638 14.6055L12.7837 9L3.36638 3.39447C3.01045 3.18261 2.89366 2.72232 3.10552 2.36639Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GreaterThan;
