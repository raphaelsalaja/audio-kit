import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddAbove({
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
          d="M9.75 2.25C9.75 1.83579 9.41421 1.5 9 1.5C8.58579 1.5 8.25 1.83579 8.25 2.25V4.5H6C5.58579 4.5 5.25 4.83579 5.25 5.25C5.25 5.66421 5.58579 6 6 6H8.25V8.25C8.25 8.66421 8.58579 9 9 9C9.41421 9 9.75 8.66421 9.75 8.25V6H12C12.4142 6 12.75 5.66421 12.75 5.25C12.75 4.83579 12.4142 4.5 12 4.5H9.75V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H15.25C15.6642 10.5 16 10.8358 16 11.25C16 11.6642 15.6642 12 15.25 12H2.75C2.33579 12 2 11.6642 2 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 14.75C2 14.3358 2.33579 14 2.75 14H15.25C15.6642 14 16 14.3358 16 14.75C16 15.1642 15.6642 15.5 15.25 15.5H2.75C2.33579 15.5 2 15.1642 2 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AddAbove;
