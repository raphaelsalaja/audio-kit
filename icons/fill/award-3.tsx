import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Award3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m6,9.5c-1.107,0-2.136-.331-3-.896v2.895c0,.399.445.638.777.416l2.223-1.482,2.223,1.482c.332.221.777-.017.777-.416v-2.895c-.864.565-1.893.896-3,.896Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="6" cy="4" fill={fill} r="4" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Award3;
