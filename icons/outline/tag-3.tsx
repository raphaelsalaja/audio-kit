import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag3({
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
          d="M3.25,2.25h4.922c.53,0,1.039,.211,1.414,.586l5.75,5.75c.781,.781,.781,2.047,0,2.828l-3.922,3.922c-.781,.781-2.047,.781-2.828,0L2.836,9.586c-.375-.375-.586-.884-.586-1.414V3.25c0-.552,.448-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10"
          x2="8"
          y1="12"
          y2="10"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12"
          x2="10"
          y1="10"
          y2="8"
        />
        <circle
          cx="6.25"
          cy="6.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Tag3;
