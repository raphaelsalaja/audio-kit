import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromBottomRight({
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
          d="M9.75 15.25L9.75 10.75C9.75 10.1977 10.1977 9.75 10.75 9.75L15.25 9.75L15.25 13.25C15.25 14.3546 14.3546 15.25 13.25 15.25L9.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9.75H10.75C10.198 9.75 9.75 10.198 9.75 10.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75Z"
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

export default ScaleFromBottomRight;
