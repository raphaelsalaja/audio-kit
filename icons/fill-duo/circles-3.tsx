import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles3({
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
          d="M4.75 8.25C5.16421 8.25 5.5 8.58579 5.5 9C5.5 10.9328 7.06721 12.5 9 12.5C9.41421 12.5 9.75 12.8358 9.75 13.25C9.75 13.6642 9.41421 14 9 14C6.23879 14 4 11.7612 4 9C4 8.58579 4.33579 8.25 4.75 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 4.75C8.25 4.33579 8.58579 4 9 4C11.7612 4 14 6.23879 14 9C14 9.41421 13.6642 9.75 13.25 9.75C12.8358 9.75 12.5 9.41421 12.5 9C12.5 7.06721 10.9328 5.5 9 5.5C8.58579 5.5 8.25 5.16421 8.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 9C7 7.89594 7.89523 7 9 7C10.1048 7 11 7.89594 11 9C11 10.1041 10.1048 11 9 11C7.89523 11 7 10.1041 7 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 4.58179 4.58168 1 9 1C13.4183 1 17 4.58179 17 9C17 13.4182 13.4183 17 9 17C4.58168 17 1 13.4182 1 9ZM9 2.5C5.41012 2.5 2.5 5.41021 2.5 9C2.5 12.5898 5.41012 15.5 9 15.5C12.5899 15.5 15.5 12.5898 15.5 9C15.5 5.41021 12.5899 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Circles3;
