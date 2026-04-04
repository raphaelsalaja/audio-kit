import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromBottomLeft({
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
          d="M2.75 9.75H7.25C7.80228 9.75 8.25 10.1977 8.25 10.75V15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 15.25V10.75C8.25 10.198 7.802 9.75 7.25 9.75H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
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

export default ScaleFromBottomLeft;
