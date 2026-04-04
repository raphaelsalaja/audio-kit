import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDots({
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
          d="M13 16C12.449 16 12 15.552 12 15C12 14.448 12.449 14 13 14C13.551 14 14 14.448 14 15C14 15.552 13.551 16 13 16Z"
          fill={fill}
        />
        <path
          d="M10 16C9.449 16 9 15.552 9 15C9 14.448 9.449 14 10 14C10.551 14 11 14.448 11 15C11 15.552 10.551 16 10 16Z"
          fill={fill}
        />
        <path
          d="M16 16C15.449 16 15 15.552 15 15C15 14.448 15.449 14 16 14C16.551 14 17 14.448 17 15C17 15.552 16.551 16 16 16Z"
          fill={fill}
        />
        <path
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V12.5C14 12.5 12 12.5 10 12.5C8.62155 12.5 7.5 13.6186 7.5 15C7.5 15.8181 7.89335 16.544 8.50045 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default HouseDots;
