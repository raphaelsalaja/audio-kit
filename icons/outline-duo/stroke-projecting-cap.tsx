import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StrokeProjectingCap({
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
          d="M11 11.25C12.2426 11.25 13.25 10.2426 13.25 9C13.25 7.75736 12.2426 6.75 11 6.75C9.75736 6.75 8.75 7.75736 8.75 9C8.75 10.2426 9.75736 11.25 11 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 14.25H15.25C15.802 14.25 16.25 13.802 16.25 13.25V4.75C16.25 4.198 15.802 3.75 15.25 3.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 11.25C12.2426 11.25 13.25 10.2426 13.25 9C13.25 7.75736 12.2426 6.75 11 6.75C9.75736 6.75 8.75 7.75736 8.75 9C8.75 10.2426 9.75736 11.25 11 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9H8.75"
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

export default StrokeProjectingCap;
