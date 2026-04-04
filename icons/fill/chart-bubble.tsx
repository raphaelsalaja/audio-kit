import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBubble({
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
        <circle cx="11.75" cy="14" fill={fill} r="2.5" />
        <circle cx="12.25" cy="5.75" fill={secondaryfill} r="4.25" />
        <circle cx="4.5" cy="11" fill={fill} r="3" />
      </g>
    </svg>
  );
}

export default ChartBubble;
