import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjRight({
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
          d="M12.25 3.75V14.25C12.25 14.8023 12.6977 15.25 13.25 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V3.75C15.25 3.19771 14.8023 2.75 14.25 2.75H13.25C12.6977 2.75 12.25 3.19771 12.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 3.75V14.25C12.25 14.8023 12.6977 15.25 13.25 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V3.75C15.25 3.19771 14.8023 2.75 14.25 2.75H13.25C12.6977 2.75 12.25 3.19771 12.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 5.75L9.25 9L6 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 9H1.75"
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

export default FollowObjRight;
