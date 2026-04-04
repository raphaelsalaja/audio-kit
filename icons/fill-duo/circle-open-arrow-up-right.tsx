import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowUpRight({
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
          d="M3.3431 3.3431C0.224095 6.4621 0.224095 11.5378 3.3431 14.6568C6.4621 17.7758 11.5378 17.7758 14.6568 14.6568C17.7758 11.5378 17.7758 6.4621 14.6568 3.3431C11.5378 0.224095 6.4621 0.224095 3.3431 3.3431Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.5486 11.2981C10.5486 11.7125 10.8845 12.0483 11.2988 12.0483C11.5053 12.0483 11.6934 11.9649 11.8291 11.8291C11.9648 11.6933 12.049 11.506 12.0483 11.2988V6.70258C12.0483 6.28818 11.7124 5.95239 11.2981 5.95239H6.70189C6.28749 5.95239 5.95169 6.28828 5.95169 6.70258C5.95169 7.11688 6.28759 7.45282 6.70189 7.45282H9.48789L3.34379 13.5969C3.05109 13.8896 3.05109 14.3648 3.34379 14.6576C3.63649 14.9504 4.11169 14.9503 4.40449 14.6576L10.5486 8.51349V11.2995V11.2981Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowUpRight;
