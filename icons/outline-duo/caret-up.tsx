import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUp({
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
          d="M8.155 3.791L3.131 11.714C2.709 12.38 3.187 13.25 3.976 13.25H14.025C14.813 13.25 15.292 12.38 14.87 11.714L9.845 3.791C9.452 3.172 8.549 3.172 8.156 3.791H8.155Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.155 3.791L3.131 11.714C2.709 12.38 3.187 13.25 3.976 13.25H14.025C14.813 13.25 15.292 12.38 14.87 11.714L9.845 3.791C9.452 3.172 8.549 3.172 8.156 3.791H8.155Z"
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

export default CaretUp;
