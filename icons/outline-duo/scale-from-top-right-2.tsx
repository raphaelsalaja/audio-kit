import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromTopRight2({
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
          d="M15.25 6.75V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L11.25 2.75C10.1454 2.75 9.25 3.64543 9.25 4.75V6.75C9.25 7.85457 10.1454 8.75 11.25 8.75H13.25C14.3546 8.75 15.25 7.85457 15.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.75V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L11.25 2.75C10.1454 2.75 9.25 3.64543 9.25 4.75V6.75C9.25 7.85457 10.1454 8.75 11.25 8.75H13.25C14.3546 8.75 15.25 7.85457 15.25 6.75Z"
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

export default ScaleFromTopRight2;
