import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaFastBackwards({
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
          d="M8.508 4.407L1.008 8.563C0.664 8.753 0.664 9.248 1.008 9.438L8.509 13.594C8.842 13.779 9.251 13.538 9.251 13.157V4.844C9.251 4.463 8.841 4.222 8.508 4.407Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 9.572L16.508 13.593C16.841 13.778 17.25 13.537 17.25 13.156V4.844C17.25 4.463 16.841 4.222 16.508 4.407L9.25 8.428"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.508 4.407L1.008 8.563C0.664 8.753 0.664 9.248 1.008 9.438L8.509 13.594C8.842 13.779 9.251 13.538 9.251 13.157V4.844C9.251 4.463 8.841 4.222 8.508 4.407Z"
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

export default MediaFastBackwards;
