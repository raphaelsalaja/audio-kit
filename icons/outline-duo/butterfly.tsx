import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Butterfly({
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
          d="m2.25,2.75c3.725,0,6.75,3.025,6.75,6.75v1.25h-2.75c-2.208,0-4-1.792-4-4V2.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.75,2.75c-3.725,0-6.75,3.025-6.75,6.75v1.25s2.75,0,2.75,0c2.208,0,4-1.792,4-4V2.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,13V5c0-1.875-2-3-2-3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,5c0-1.875-2-3-2-3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,5c0-1.875,2-3,2-3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.3824,4.0205c-.9364-.4922-2.0022-.7705-3.1324-.7705v3.5c0,2.208,1.792,4,4,4h0c-1.45,0-2.5,1.175-2.5,2.625s1.175,2.625,2.625,2.625,2.625-1.175,2.625-2.625v-.375"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.6176,4.0205c.9364-.4922,2.0022-.7705,3.1324-.7705v3.5c0,2.208-1.792,4-4,4h0c1.45,0,2.5,1.175,2.5,2.625s-1.175,2.625-2.625,2.625-2.625-1.175-2.625-2.625v-.375"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="5.5" cy="7" fill={fill} r="1" strokeWidth="0" />
        <circle cx="12.5" cy="7" fill={fill} r="1" strokeWidth="0" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6"
          x2="12"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default Butterfly;
