import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lips({
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
          d="M9 5.683C10.289 4.411 12.254 4.443 13.507 5.757L16.75 9C15.2 10.7 12.875 13.25 9 13.25C5.125 13.25 2.8 10.7 1.25 9L4.493 5.757C5.746 4.443 7.711 4.411 9 5.683Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.25 9.00001C4.018 9.00001 4.295 8.39301 5.679 8.39301C7.063 8.39301 7.34 9.00001 9 9.00001C10.66 9.00001 10.938 8.39301 12.321 8.39301C13.704 8.39301 14.535 9.00001 16.75 9.00001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.683C10.289 4.411 12.254 4.443 13.507 5.757L16.75 9C15.2 10.7 12.875 13.25 9 13.25C5.125 13.25 2.8 10.7 1.25 9L4.493 5.757C5.746 4.443 7.711 4.411 9 5.683Z"
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

export default Lips;
