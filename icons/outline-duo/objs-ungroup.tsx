import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjsUngroup({
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
          d="M9.25 2.75H3.75C3.198 2.75 2.75 3.198 2.75 3.75V9.25C2.75 9.802 3.198 10.25 3.75 10.25H9.25C9.802 10.25 10.25 9.802 10.25 9.25V3.75C10.25 3.198 9.802 2.75 9.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 2.75H3.75C3.198 2.75 2.75 3.198 2.75 3.75V9.25C2.75 9.802 3.198 10.25 3.75 10.25H9.25C9.802 10.25 10.25 9.802 10.25 9.25V3.75C10.25 3.198 9.802 2.75 9.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.75H14.25C14.802 7.75 15.25 8.198 15.25 8.75V14.25C15.25 14.802 14.802 15.25 14.25 15.25H8.75C8.198 15.25 7.75 14.802 7.75 14.25V13.25"
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

export default ObjsUngroup;
