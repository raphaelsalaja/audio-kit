import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDown2({
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
          d="M6.75 10.25H3.75C3.19772 10.25 2.75 10.6977 2.75 11.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V11.25C7.75 10.6977 7.30228 10.25 6.75 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 10.25H3.75C3.19772 10.25 2.75 10.6977 2.75 11.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H6.75C7.30228 15.25 7.75 14.8023 7.75 14.25V11.25C7.75 10.6977 7.30228 10.25 6.75 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 12.75L12.75 15.25L15.25 12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 15.25V2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 6.5V6.75C2.75 7.302 3.198 7.75 3.75 7.75H4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 2.75H3.75C3.198 2.75 2.75 3.198 2.75 3.75V4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 4V3.75C7.75 3.198 7.302 2.75 6.75 2.75H6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 7.75H6.75C7.302 7.75 7.75 7.302 7.75 6.75V6.5"
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

export default MoveObjDown2;
