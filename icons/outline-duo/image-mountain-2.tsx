import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain2({
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
          d="M11.726 6.64999L3.117 13.466C2.374 14.054 2.79 15.25 3.738 15.25H14.499C15.175 15.25 15.656 14.593 15.453 13.949L13.301 7.13399C13.09 6.46599 12.276 6.21599 11.727 6.65099L11.726 6.64999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 6.25C5.966 6.25 6.75 5.466 6.75 4.5C6.75 3.534 5.966 2.75 5 2.75C4.034 2.75 3.25 3.534 3.25 4.5C3.25 5.466 4.034 6.25 5 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.726 6.64999L3.117 13.466C2.374 14.054 2.79 15.25 3.738 15.25H14.499C15.175 15.25 15.656 14.593 15.453 13.949L13.301 7.13399C13.09 6.46599 12.276 6.21599 11.727 6.65099L11.726 6.64999Z"
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

export default ImageMountain2;
