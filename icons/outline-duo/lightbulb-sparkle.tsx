import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LightbulbSparkle({
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
          d="m7.922,1.863c3.232-.675,6.078,1.774,6.078,4.887,0,1.951-1.12,3.637-2.75,4.461v2.039h-4.5v-2.039c-1.891-.956-3.096-3.071-2.662-5.415.359-1.94,1.902-3.53,3.834-3.933Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.75,13.25h4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14,6.75c0-3.113-2.846-5.562-6.078-4.887-1.932.403-3.475,1.993-3.834,3.933-.434,2.344.771,4.459,2.662,5.415v3.039c0,1.105.895,2,2,2h.5c1.105,0,2-.895,2-2v-3.039c1.63-.824,2.75-2.51,2.75-4.461Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="8.375 6.75 9.125 4.5 7.625 6.75 10.375 6.75 8.875 9 9.625 6.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default LightbulbSparkle;
