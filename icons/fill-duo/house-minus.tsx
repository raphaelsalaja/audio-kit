import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseMinus({
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
          d="M10.0591 1.36312C9.4333 0.886573 8.56694 0.887449 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35288L10.0591 1.36312Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.75 10.25C5.75 9.83579 6.08579 9.5 6.5 9.5H11.5C11.9142 9.5 12.25 9.83579 12.25 10.25C12.25 10.6642 11.9142 11 11.5 11H6.5C6.08579 11 5.75 10.6642 5.75 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseMinus;
