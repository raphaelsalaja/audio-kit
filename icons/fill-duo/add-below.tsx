import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddBelow({
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
          d="M9.75 9.75C9.75 9.33579 9.41421 9 9 9C8.58579 9 8.25 9.33579 8.25 9.75V12H6C5.58579 12 5.25 12.3358 5.25 12.75C5.25 13.1642 5.58579 13.5 6 13.5H8.25V15.75C8.25 16.1642 8.58579 16.5 9 16.5C9.41421 16.5 9.75 16.1642 9.75 15.75V13.5H12C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12H9.75V9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 6.75C2 6.33579 2.33579 6 2.75 6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 3.25C2 2.83579 2.33579 2.5 2.75 2.5H15.25C15.6642 2.5 16 2.83579 16 3.25C16 3.66421 15.6642 4 15.25 4H2.75C2.33579 4 2 3.66421 2 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AddBelow;
