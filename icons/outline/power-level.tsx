import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PowerLevel({
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
          x1="7.954"
          x2="7.215"
          y1="4.883"
          y2="1.973"
        />
        <path
          d="M7.309,14.952c-.25-.934,.076-6.49,.076-6.49,0,0,3.055,4.652,3.305,5.586s-.305,1.893-1.239,2.143-1.893-.305-2.143-1.239Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.75c2.087,0,3.828,1.513,4.184,3.5h3.029c-.371-3.656-3.459-6.5-7.213-6.5-3.754,0-6.841,2.844-7.213,6.5h3.029c.355-1.987,2.096-3.5,4.184-3.5Z"
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

export default PowerLevel;
