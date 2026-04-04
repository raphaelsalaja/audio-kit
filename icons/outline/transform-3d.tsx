import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Transform3d({
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
          d="m4.5856,4.3607l8.5-1.4167c.6095-.1016,1.1644.3685,1.1644.9864v10.1391c0,.6179-.5549,1.088-1.1644.9864l-8.5-1.4167c-.4822-.0804-.8356-.4976-.8356-.9864v-7.3057c0-.4888.3534-.906.8356-.9864Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.25"
          x2="8.25"
          y1="16.25"
          y2="1.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.25"
          x2="15.75"
          y1="9"
          y2="9"
        />
      </g>
    </svg>
  );
}

export default Transform3d;
