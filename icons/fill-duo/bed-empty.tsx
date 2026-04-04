import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BedEmpty({
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
        <path d="M1.75 6H6V12H1.75V6Z" fill={secondaryfill} fillOpacity="0.2" />
        <path
          d="M14.25 6H6V12.25C6 12.6642 6.33579 13 6.75 13H16.25C16.6642 13 17 12.6642 17 12.25V8.75C17 7.23079 15.7692 6 14.25 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.5 3.25C2.5 2.83579 2.16421 2.5 1.75 2.5C1.33579 2.5 1 2.83579 1 3.25V14.75C1 15.1642 1.33579 15.5 1.75 15.5C2.16421 15.5 2.5 15.1642 2.5 14.75V13H15.5V14.75C15.5 15.1642 15.8358 15.5 16.25 15.5C16.6642 15.5 17 15.1642 17 14.75V12.25C17 11.8358 16.6642 11.5 16.25 11.5H2.5V3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BedEmpty;
