import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaintRoller({
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
          d="M15.75 4.75V2.75C15.75 2.198 15.302 1.75 14.75 1.75H3.25C2.698 1.75 2.25 2.198 2.25 2.75V4.75C2.25 5.302 2.698 5.75 3.25 5.75H14.75C15.302 5.75 15.75 5.302 15.75 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.75V9.75C9 9.1977 8.5523 8.75 8 8.75H3.75C3.1977 8.75 2.75 8.3023 2.75 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 10.75H8.5C7.948 10.75 7.5 11.198 7.5 11.75V15.25C7.5 15.802 7.948 16.25 8.5 16.25H9.5C10.052 16.25 10.5 15.802 10.5 15.25V11.75C10.5 11.198 10.052 10.75 9.5 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 4.75V2.75C15.75 2.198 15.302 1.75 14.75 1.75H3.25C2.698 1.75 2.25 2.198 2.25 2.75V4.75C2.25 5.302 2.698 5.75 3.25 5.75H14.75C15.302 5.75 15.75 5.302 15.75 4.75Z"
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

export default PaintRoller;
