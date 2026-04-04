import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NamePlate({
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
          d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.44003 2.44054 5 1.75 5C1.33579 5 1 5.33579 1 5.75V12.25C1 12.6642 1.33579 13 1.75 13C2.44054 13 3 13.56 3 14.25C3 14.6642 3.33579 15 3.75 15H14.25C14.6642 15 15 14.6642 15 14.25C15 13.56 15.5595 13 16.25 13C16.6642 13 17 12.6642 17 12.25V5.75C17 5.33579 16.6642 5 16.25 5C15.5595 5 15 4.44003 15 3.75C15 3.33579 14.6642 3 14.25 3H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 7.75C5 7.33579 5.33579 7 5.75 7H12.25C12.6642 7 13 7.33579 13 7.75C13 8.16421 12.6642 8.5 12.25 8.5H5.75C5.33579 8.5 5 8.16421 5 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 10.75C5 10.3358 5.33579 10 5.75 10H12.25C12.6642 10 13 10.3358 13 10.75C13 11.1642 12.6642 11.5 12.25 11.5H5.75C5.33579 11.5 5 11.1642 5 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default NamePlate;
