import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bra({
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
          d="M2.25 8.243C1.532 9.604 1.582 11.274 2.367 12.526C2.432 12.629 3.47 14.377 5.581 14.235C7.692 14.093 8.844 12.656 9 12.25V12.252C8.318 11.243 7.625 10.334 6.212 9.4C4.696 8.398 3.059 8.243 2.25 8.243Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 8.243C16.468 9.604 16.418 11.274 15.633 12.526C15.568 12.629 14.53 14.377 12.419 14.235C10.308 14.093 9.156 12.656 9 12.25V12.252C9.682 11.243 10.375 10.334 11.788 9.4C13.304 8.398 14.941 8.243 15.75 8.243Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 3V8.243"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 3V8.243"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.243C1.532 9.604 1.582 11.274 2.367 12.526C2.432 12.629 3.47 14.377 5.581 14.235C7.692 14.093 8.844 12.656 9 12.25V12.252C8.318 11.243 7.625 10.334 6.212 9.4C4.696 8.398 3.059 8.243 2.25 8.243Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.243C16.468 9.604 16.418 11.274 15.633 12.526C15.568 12.629 14.53 14.377 12.419 14.235C10.308 14.093 9.156 12.656 9 12.25V12.252C9.682 11.243 10.375 10.334 11.788 9.4C13.304 8.398 14.941 8.243 15.75 8.243Z"
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

export default Bra;
