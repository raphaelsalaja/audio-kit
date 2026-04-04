import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SolarPanel({
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
          d="M3.31227 3.21161C3.54593 2.48675 4.22181 2 4.97799 2H13.022C13.7815 2 14.4538 2.48996 14.6867 3.2116L16.7896 9.71113C17.1553 10.8414 16.3122 12 15.125 12H2.875C1.68623 12 0.844966 10.841 1.2104 9.71123L3.31227 3.21161Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.81591 2.0029C7.22852 2.03931 7.53349 2.40331 7.49708 2.81592L7.21613 6H10.7838L10.5029 2.81592C10.4665 2.40331 10.7715 2.03931 11.1841 2.0029C11.5967 1.9665 11.9607 2.27147 11.9971 2.68408L12.2897 6H15C15.4142 6 15.75 6.33579 15.75 6.75C15.75 7.16421 15.4142 7.5 15 7.5H12.422L12.7471 11.1841C12.7835 11.5967 12.4785 11.9607 12.0659 11.9971C11.6533 12.0335 11.2893 11.7285 11.2529 11.3159L10.9162 7.5H7.08378L6.74708 11.3159C6.71068 11.7285 6.34667 12.0335 5.93406 11.9971C5.52145 11.9607 5.21648 11.5967 5.25289 11.1841L5.57795 7.5H2.95599C2.54178 7.5 2.20599 7.16421 2.20599 6.75C2.20599 6.33579 2.54178 6 2.95599 6H5.71031L6.00289 2.68408C6.03929 2.27147 6.40329 1.9665 6.81591 2.0029Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 14.5V12H9.75V14.5H12.25C12.6642 14.5 13 14.8358 13 15.25C13 15.6642 12.6642 16 12.25 16H5.75C5.33579 16 5 15.6642 5 15.25C5 14.8358 5.33579 14.5 5.75 14.5H8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SolarPanel;
