import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cyborg({
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
          d="M5.75,16.25v-3.332c-2.166-1.257-3.483-3.81-2.832-6.607,.527-2.265,2.263-3.95,4.539-4.426,3.879-.81,7.293,2.129,7.293,5.865v1.75l1.75,2.5-1.754,.851-.283,1.652c-.123,.72-.748,1.247-1.479,1.247h-2.235c-1.105,0-2-.895-2-2v-4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="8.75"
          cy="7.75"
          fill="none"
          r="2"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cyborg;
