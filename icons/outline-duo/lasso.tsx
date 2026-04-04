import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lasso({
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
          d="M9 13.75C12.7279 13.75 15.75 11.1756 15.75 8C15.75 4.82436 12.7279 2.25 9 2.25C5.27208 2.25 2.25 4.82436 2.25 8C2.25 11.1756 5.27208 13.75 9 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.75C6.941 13.75 6.788 12.159 7.039 11.553C7.353 10.794 8.243 10.105 10.219 10.281C13.045 10.533 14.683 14.687 9.75 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.75C12.7279 13.75 15.75 11.1756 15.75 8C15.75 4.82436 12.7279 2.25 9 2.25C5.27208 2.25 2.25 4.82436 2.25 8C2.25 11.1756 5.27208 13.75 9 13.75Z"
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

export default Lasso;
