import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencySterling({
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
          d="M4.25 9.75C4.25 9.33579 4.58579 9 5 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5C4.58579 10.5 4.25 10.1642 4.25 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 3.5C8.50721 3.5 7.5 4.50721 7.5 5.75V13.5C7.5 13.8555 7.42571 14.1937 7.29181 14.5H13C13.4142 14.5 13.75 14.8358 13.75 15.25C13.75 15.6642 13.4142 16 13 16H5C4.58579 16 4.25 15.6642 4.25 15.25C4.25 14.8358 4.58579 14.5 5 14.5C5.55179 14.5 6 14.0518 6 13.5V5.75C6 3.67879 7.67879 2 9.75 2C11.8212 2 13.5 3.67879 13.5 5.75C13.5 6.16421 13.1642 6.5 12.75 6.5C12.3358 6.5 12 6.16421 12 5.75C12 4.50721 10.9928 3.5 9.75 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CurrencySterling;
