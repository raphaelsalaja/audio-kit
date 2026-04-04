import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUp2({
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
          d="M6.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V3.75C7.75 3.19772 7.30228 2.75 6.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.75C2.75 7.30228 3.19772 7.75 3.75 7.75H6.75C7.30228 7.75 7.75 7.30228 7.75 6.75V3.75C7.75 3.19772 7.30228 2.75 6.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 5.25L12.75 2.75L15.25 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 2.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 11.5V11.25C2.75 10.698 3.198 10.25 3.75 10.25H4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 15.25H3.75C3.198 15.25 2.75 14.802 2.75 14.25V14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 14V14.25C7.75 14.802 7.302 15.25 6.75 15.25H6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 10.25H6.75C7.302 10.25 7.75 10.698 7.75 11.25V11.5"
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

export default MoveObjUp2;
