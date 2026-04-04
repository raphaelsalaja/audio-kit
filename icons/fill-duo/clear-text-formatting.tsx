import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClearTextFormatting({
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
          d="M3.75 2C3.33579 2 3 2.33579 3 2.75C3 3.16421 3.33579 3.5 3.75 3.5H8.25V8.96179C8.25 9.376 8.58579 9.71179 9 9.71179C9.41421 9.71179 9.75 9.376 9.75 8.96179V3.5H14.25C14.6642 3.5 15 3.16421 15 2.75C15 2.33579 14.6642 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 12.4922C9.41421 12.4922 9.75 12.828 9.75 13.2422V15.25C9.75 15.6642 9.41421 16 9 16C8.58579 16 8.25 15.6642 8.25 15.25V13.2422C8.25 12.828 8.58579 12.4922 9 12.4922Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClearTextFormatting;
