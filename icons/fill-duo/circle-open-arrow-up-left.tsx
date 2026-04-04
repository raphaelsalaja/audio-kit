import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowUpLeft({
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
          d="M3.3431 14.6569C6.4621 17.7759 11.5378 17.7759 14.6568 14.6569C17.7758 11.5379 17.7758 6.46222 14.6568 3.34322C11.5378 0.224217 6.4621 0.224217 3.3431 3.34322C0.224095 6.46222 0.224095 11.5379 3.3431 14.6569Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.2981 7.45142C11.7125 7.45142 12.0483 7.11548 12.0483 6.70118C12.0483 6.28688 11.9649 6.3066 11.8291 6.1709C11.6933 6.0352 11.506 5.95103 11.2988 5.95173H6.70259C6.28819 5.95173 5.95239 6.28761 5.95239 6.70191V11.2981C5.95239 11.7125 6.28829 12.0483 6.70259 12.0483C7.11689 12.0483 7.45279 11.7124 7.45279 11.2981V8.51209L13.5969 14.6562C13.8896 14.9489 14.3648 14.9489 14.6576 14.6562C14.9504 14.3635 14.9503 13.8883 14.6576 13.5955L8.51349 7.45142H11.2995H11.2981Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowUpLeft;
