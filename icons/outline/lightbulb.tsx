import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lightbulb({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.75"
          x2="11.25"
          y1="13.25"
          y2="13.25"
        />
        <path
          d="M14,6.75c0-3.113-2.846-5.562-6.078-4.887-1.932,.403-3.475,1.993-3.834,3.933-.434,2.344,.771,4.459,2.662,5.415v3.039c0,1.105,.895,2,2,2h.5c1.105,0,2-.895,2-2v-3.039c1.63-.824,2.75-2.51,2.75-4.461Z"
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

export default Lightbulb;
