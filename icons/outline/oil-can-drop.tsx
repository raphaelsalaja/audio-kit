import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OilCanDrop({
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
          d="M3.75,6.75h5.912c.363,0,.698,.197,.874,.514l.964,1.736,5.75-2.25-4.901,5.792c-.38,.449-.938,.708-1.527,.708H5.75c-1.105,0-2-.895-2-2V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,16.75c.828,0,1.5-.681,1.5-1.522,0-1.156-.841-1.65-1.5-2.478-.659,.828-1.5,1.322-1.5,2.478,0,.841,.672,1.522,1.5,1.522Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75,10.75h-1c-1.105,0-2-.895-2-2v-1c0-.552,.448-1,1-1H3.75"
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
          x1="4.25"
          x2="9.25"
          y1="2.75"
          y2="2.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.75"
          x2="6.75"
          y1="2.75"
          y2="4.25"
        />
      </g>
    </svg>
  );
}

export default OilCanDrop;
