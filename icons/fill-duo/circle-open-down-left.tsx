import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenDownLeft({
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
          d="M14.6569 14.6569C17.7759 11.5379 17.7759 6.46222 14.6569 3.34322C11.5379 0.224217 6.4622 0.224217 3.3432 3.34322C0.224202 6.46222 0.224202 11.5379 3.3432 14.6569C6.4622 17.7759 11.5379 17.7759 14.6569 14.6569Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.45141 6.70192C7.45141 6.28752 7.11551 5.95174 6.70121 5.95174C6.49471 5.95174 6.3066 6.03512 6.1709 6.17092C6.0352 6.30672 5.95101 6.49399 5.95171 6.70119V11.2974C5.95171 11.7118 6.28761 12.0476 6.70191 12.0476H11.2981C11.7125 12.0476 12.0483 11.7117 12.0483 11.2974C12.0483 10.8831 11.7124 10.5472 11.2981 10.5472H8.5121L14.6562 4.4031C14.9489 4.1104 14.9489 3.63523 14.6562 3.34243C14.3635 3.04963 13.8883 3.04973 13.5955 3.34243L7.45141 9.48653V6.70052V6.70192Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenDownLeft;
