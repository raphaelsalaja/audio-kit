import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjLeft({
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
          d="M12.75 3.75V14.25C12.75 14.8023 13.1977 15.25 13.75 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V3.75C15.75 3.19771 15.3023 2.75 14.75 2.75H13.75C13.1977 2.75 12.75 3.19771 12.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 3.75V14.25C12.75 14.8023 13.1977 15.25 13.75 15.25H14.75C15.3023 15.25 15.75 14.8023 15.75 14.25V3.75C15.75 3.19771 15.3023 2.75 14.75 2.75H13.75C13.1977 2.75 12.75 3.19771 12.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 12.25L2.25 9L5.5 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 9H9.75"
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

export default MoveObjLeft;
