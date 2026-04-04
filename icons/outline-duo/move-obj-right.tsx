import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjRight({
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
          d="M5.25 14.25L5.25 3.75C5.25 3.19772 4.80228 2.75 4.25 2.75H3.25C2.69772 2.75 2.25 3.19772 2.25 3.75L2.25 14.25C2.25 14.8023 2.69772 15.25 3.25 15.25H4.25C4.80228 15.25 5.25 14.8023 5.25 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 14.25L5.25 3.75C5.25 3.19772 4.80228 2.75 4.25 2.75H3.25C2.69772 2.75 2.25 3.19772 2.25 3.75L2.25 14.25C2.25 14.8023 2.69772 15.25 3.25 15.25H4.25C4.80228 15.25 5.25 14.8023 5.25 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 5.75L15.75 9L12.5 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9H8.25"
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

export default MoveObjRight;
