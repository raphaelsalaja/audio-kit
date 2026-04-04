import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDown({
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
          d="M3.75 5.25L14.25 5.25C14.8023 5.25 15.25 4.80228 15.25 4.25V3.25C15.25 2.69772 14.8023 2.25 14.25 2.25L3.75 2.25C3.19771 2.25 2.75 2.69772 2.75 3.25V4.25C2.75 4.80228 3.19771 5.25 3.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.25L14.25 5.25C14.8023 5.25 15.25 4.80228 15.25 4.25V3.25C15.25 2.69772 14.8023 2.25 14.25 2.25L3.75 2.25C3.19771 2.25 2.75 2.69772 2.75 3.25V4.25C2.75 4.80228 3.19771 5.25 3.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.5L9 15.75L5.75 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.75V8.25"
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

export default MoveObjDown;
