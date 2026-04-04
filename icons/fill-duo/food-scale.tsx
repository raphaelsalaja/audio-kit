import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodScale({
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
          d="M3 11.5C3 8.18779 5.68779 5.5 9 5.5C12.3122 5.5 15 8.18779 15 11.5V14.25C15 15.7682 13.7682 17 12.25 17H5.75C4.23179 17 3 15.7682 3 14.25V11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H8.25V3.75C8.25 4.16421 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75V2.5H15.25C15.6642 2.5 16 2.16421 16 1.75C16 1.33579 15.6642 1 15.25 1H2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2803 9.71967C11.5732 10.0126 11.5732 10.4874 11.2803 10.7803L9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L10.2197 9.71967C10.5126 9.42678 10.9874 9.42678 11.2803 9.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FoodScale;
