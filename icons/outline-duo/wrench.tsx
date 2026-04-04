import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wrench({
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
          d="M11.75 17V13.606C13.821 12.588 15.25 10.463 15.25 7.99995C15.25 5.34295 13.589 3.07795 11.25 2.17395V7.24995C11.25 7.80195 10.802 8.24995 10.25 8.24995H7.75C7.198 8.24995 6.75 7.80195 6.75 7.24995V2.17395C4.411 3.07795 2.75 5.34195 2.75 7.99995C2.75 10.463 4.179 12.588 6.25 13.606V17"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 16.25V13.606C13.821 12.588 15.25 10.463 15.25 7.99995C15.25 5.34295 13.589 3.07795 11.25 2.17395V7.24995C11.25 7.80195 10.802 8.24995 10.25 8.24995H7.75C7.198 8.24995 6.75 7.80195 6.75 7.24995V2.17395C4.411 3.07795 2.75 5.34195 2.75 7.99995C2.75 10.463 4.179 12.588 6.25 13.606V16.25"
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

export default Wrench;
