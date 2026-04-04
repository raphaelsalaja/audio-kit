import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectObj({
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
          d="M4.75 12.25H2.75C2.198 12.25 1.75 12.698 1.75 13.25V15.25C1.75 15.802 2.198 16.25 2.75 16.25H4.75C5.302 16.25 5.75 15.802 5.75 15.25V13.25C5.75 12.698 5.302 12.25 4.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 1.75H2.75C2.198 1.75 1.75 2.198 1.75 2.75V4.75C1.75 5.302 2.198 5.75 2.75 5.75H4.75C5.302 5.75 5.75 5.302 5.75 4.75V2.75C5.75 2.198 5.302 1.75 4.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 1.75H13.25C12.698 1.75 12.25 2.198 12.25 2.75V4.75C12.25 5.302 12.698 5.75 13.25 5.75H15.25C15.802 5.75 16.25 5.302 16.25 4.75V2.75C16.25 2.198 15.802 1.75 15.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.184 9.77004L17.038 12.274C17.327 12.38 17.318 12.791 17.026 12.885L13.889 13.889L12.885 17.026C12.791 17.319 12.38 17.327 12.274 17.038L9.76998 10.184C9.67598 9.92604 9.92598 9.67604 10.184 9.77004Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 12.25H2.75C2.198 12.25 1.75 12.698 1.75 13.25V15.25C1.75 15.802 2.198 16.25 2.75 16.25H4.75C5.302 16.25 5.75 15.802 5.75 15.25V13.25C5.75 12.698 5.302 12.25 4.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 1.75H2.75C2.198 1.75 1.75 2.198 1.75 2.75V4.75C1.75 5.302 2.198 5.75 2.75 5.75H4.75C5.302 5.75 5.75 5.302 5.75 4.75V2.75C5.75 2.198 5.302 1.75 4.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 1.75H13.25C12.698 1.75 12.25 2.198 12.25 2.75V4.75C12.25 5.302 12.698 5.75 13.25 5.75H15.25C15.802 5.75 16.25 5.302 16.25 4.75V2.75C16.25 2.198 15.802 1.75 15.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 14.25H8.0614"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 8.0614V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 3.75H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.184 9.77004L17.038 12.274C17.327 12.38 17.318 12.791 17.026 12.885L13.889 13.889L12.885 17.026C12.791 17.319 12.38 17.327 12.274 17.038L9.76998 10.184C9.67598 9.92604 9.92598 9.67604 10.184 9.77004Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SelectObj;
