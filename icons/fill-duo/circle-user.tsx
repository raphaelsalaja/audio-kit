import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUser({
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
          d="M1 9.0005C1 4.58229 4.58179 1.0005 9 1.0005C13.4182 1.0005 17 4.58229 17 9.0005C17 13.4187 13.4182 17.0005 9 17.0005C4.58179 17.0005 1 13.4187 1 9.0005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.74811 7.75049C6.74811 6.50742 7.75552 5.50049 8.99811 5.50049C10.2407 5.50049 11.2481 6.50742 11.2481 7.75049C11.2481 8.99356 10.2407 10.0005 8.99811 10.0005C7.75552 10.0005 6.74811 8.99356 6.74811 7.75049Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.7078 15.4693C12.3869 16.4323 10.7598 17.0005 8.99998 17.0005C7.24016 17.0005 5.61305 16.4323 4.29211 15.4692L4.40033 15.0609C4.92847 13.014 6.78638 11.5005 8.99995 11.5005C11.2135 11.5005 13.0714 13.0139 13.5996 15.0608L13.7078 15.4693Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleUser;
