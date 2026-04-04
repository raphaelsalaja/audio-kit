import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Baloon({
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
          d="M3 7.75C3 4.11929 5.59535 1 9 1C12.4047 1 15 4.11929 15 7.75C15 11.3807 12.4047 14.5 9 14.5C5.59535 14.5 3 11.3807 3 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.60036 14.4856C8.61379 14.5901 8.58044 14.6999 8.49967 14.7807L8.12336 15.161C7.40024 15.8845 7.40177 17.0574 8.12468 17.7803C8.41757 18.0732 8.89244 18.0732 9.18534 17.7803C9.47823 17.4874 9.47823 17.0126 9.18534 16.7197C9.04689 16.5812 9.04778 16.3576 9.18472 16.221L9.56191 15.8398C9.95861 15.4421 10.1375 14.9088 10.0979 14.389C9.74344 14.4618 9.37667 14.5 9 14.5C8.86549 14.5 8.73224 14.4951 8.60036 14.4856Z"
          fill={fill}
        />
        <path
          d="M7.65564 5.75196C7.26235 6.25257 7 6.96289 7 7.75C7 8.16421 6.66421 8.5 6.25 8.5C5.83579 8.5 5.5 8.16421 5.5 7.75C5.5 6.64011 5.86715 5.60043 6.47611 4.82529C7.08358 4.05205 7.97196 3.5 9 3.5C9.41421 3.5 9.75 3.83579 9.75 4.25C9.75 4.66421 9.41421 5 9 5C8.53704 5 8.05042 5.24945 7.65564 5.75196Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Baloon;
