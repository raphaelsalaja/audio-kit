import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Highlighter2({
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
          d="M7.35199 2.991C7.53099 3.634 7.69599 4.528 7.63899 5.591C7.60899 6.147 7.52399 6.643 7.42099 7.067C7.34599 7.372 7.49699 7.686 7.78599 7.809L9.17399 8.402L10.562 8.995C10.851 9.118 11.182 9.011 11.351 8.746C11.585 8.378 11.885 7.974 12.266 7.568C12.991 6.796 13.747 6.297 14.334 5.982"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.35199 2.991C7.53099 3.634 7.69599 4.528 7.63899 5.591C7.60899 6.147 7.52399 6.643 7.42099 7.067C7.34599 7.372 7.49699 7.686 7.78599 7.809L9.17399 8.402L10.562 8.995C10.851 9.118 11.182 9.011 11.351 8.746C11.585 8.378 11.885 7.974 12.266 7.568C12.991 6.796 13.747 6.297 14.334 5.982"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 1.24699L7.359 2.35599C7.166 2.68599 7.307 3.11099 7.659 3.26099L10.797 4.60099L13.935 5.94099C14.287 6.09099 14.69 5.89899 14.796 5.53199L15.166 4.23599"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.252 8.861L9.49399 10.75H6.78799L8.02699 7.911L10.252 8.861Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.00101 10.75H3.25101C2.42301 10.75 1.75101 11.422 1.75101 12.25C1.75101 13.078 2.42301 13.75 3.25101 13.75H14.751C15.579 13.75 16.251 14.422 16.251 15.25C16.251 16.078 15.579 16.75 14.751 16.75H12.751"
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

export default Highlighter2;
