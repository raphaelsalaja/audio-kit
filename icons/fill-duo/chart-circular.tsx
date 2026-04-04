import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCircular({
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
          d="M8.25 1.75C8.25 1.33579 8.58579 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9C1 7.37009 1.48896 5.85076 2.32671 4.58587C2.55543 4.24053 3.02079 4.14599 3.36613 4.37471C3.71147 4.60343 3.80601 5.06879 3.57729 5.41413C2.89704 6.44124 2.5 7.67391 2.5 9C2.5 12.5898 5.41021 15.5 9 15.5C12.5898 15.5 15.5 12.5898 15.5 9C15.5 5.41021 12.5898 2.5 9 2.5C8.58579 2.5 8.25 2.16421 8.25 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 4.75C8.25 4.33579 8.58579 4 9 4C11.7612 4 14 6.23879 14 9C14 11.7612 11.7612 14 9 14C6.23879 14 4 11.7612 4 9C4 8.58579 4.33579 8.25 4.75 8.25C5.16421 8.25 5.5 8.58579 5.5 9C5.5 10.9328 7.06721 12.5 9 12.5C10.9328 12.5 12.5 10.9328 12.5 9C12.5 7.06721 10.9328 5.5 9 5.5C8.58579 5.5 8.25 5.16421 8.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 7.75C8.25 7.33579 8.58579 7 9 7C10.1042 7 11 7.89579 11 9C11 10.1042 10.1042 11 9 11C8.58579 11 8.25 10.6642 8.25 10.25C8.25 9.83579 8.58579 9.5 9 9.5C9.27579 9.5 9.5 9.27579 9.5 9C9.5 8.72421 9.27579 8.5 9 8.5C8.58579 8.5 8.25 8.16421 8.25 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartCircular;
