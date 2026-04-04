import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromBottomLeft2({
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
          d="M10.75,15.25h2.5c1.105,0,2-.895,2-2V4.75c0-1.105-.895-2-2-2H4.75c-1.105,0-2,.895-2,2v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="6"
          width="6"
          fill="none"
          rx="2"
          ry="2"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-6.5 18) rotate(-90)"
          x="2.75"
          y="9.25"
        />
      </g>
    </svg>
  );
}

export default ScaleFromBottomLeft2;
