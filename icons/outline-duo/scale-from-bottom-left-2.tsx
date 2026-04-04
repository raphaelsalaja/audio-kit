import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromBottomLeft2({
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
          d="M2.75 11.25L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H6.75C7.85457 15.25 8.75 14.3546 8.75 13.25V11.25C8.75 10.1454 7.85457 9.25 6.75 9.25H4.75C3.64543 9.25 2.75 10.1454 2.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V4.75C15.25 3.645 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 11.25L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H6.75C7.85457 15.25 8.75 14.3546 8.75 13.25V11.25C8.75 10.1454 7.85457 9.25 6.75 9.25H4.75C3.64543 9.25 2.75 10.1454 2.75 11.25Z"
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

export default ScaleFromBottomLeft2;
