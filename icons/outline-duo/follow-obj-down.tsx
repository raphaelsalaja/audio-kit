import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDown({
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
          d="M14.25 12.25H3.75C3.19772 12.25 2.75 12.6977 2.75 13.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V13.25C15.25 12.6977 14.8023 12.25 14.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 12.25H3.75C3.19772 12.25 2.75 12.6977 2.75 13.25V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V13.25C15.25 12.6977 14.8023 12.25 14.25 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6L9 9.25L5.75 6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.25V1.75"
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

export default FollowObjDown;
