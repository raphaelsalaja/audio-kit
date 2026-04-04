import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePlus({
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
          d="M10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287L10.0591 1.36312Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 7.75C9.75 7.33579 9.41421 7 9 7C8.58579 7 8.25 7.33579 8.25 7.75V9.5H6.5C6.08579 9.5 5.75 9.83579 5.75 10.25C5.75 10.6642 6.08579 11 6.5 11H8.25V12.75C8.25 13.1642 8.58579 13.5 9 13.5C9.41421 13.5 9.75 13.1642 9.75 12.75V11H11.5C11.9142 11 12.25 10.6642 12.25 10.25C12.25 9.83579 11.9142 9.5 11.5 9.5H9.75V7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HousePlus;
