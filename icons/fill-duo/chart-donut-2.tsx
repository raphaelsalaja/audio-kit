import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut2({
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
          d="M3.34314 14.6569C4.79085 16.1046 6.79085 17 9.00001 17C13.4183 17 17 13.4183 17 9.00001C17 6.79085 16.1046 4.79085 14.6569 3.34314L11.1213 6.87867C11.6642 7.42156 12 8.17156 12 9.00001C12 10.6569 10.6569 12 9.00001 12C8.17157 12 7.42157 11.6642 6.87868 11.1213L3.34314 14.6569Z"
          fill={fill}
        />
        <path
          d="M6.87867 6.87867C7.42156 6.33578 8.17156 6 9.00001 6C9.82846 6 10.5785 6.33578 11.1213 6.87867L14.6569 3.34314C13.2092 1.89542 11.2092 1 9.00001 1C6.79085 1 4.79085 1.89542 3.34314 3.34313L6.87867 6.87867Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.34313 3.34312L6.87866 6.87866C6.33578 7.42155 6 8.17155 6 8.99999C6 9.82843 6.33578 10.5784 6.87868 11.1213L3.34314 14.6569C1.89542 13.2091 1 11.2091 1 8.99999C1 6.79083 1.89542 4.79083 3.34313 3.34312Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default ChartDonut2;
