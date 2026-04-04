import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Half({
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
          d="M9,4.926s0,0,0,.001c.171-.353,.396-.677,.666-.962,1.451-1.528,3.867-1.591,5.395-.139,1.528,1.451,1.59,3.867,.139,5.395l-5.48,5.694c-.197,.205-.459,.307-.721,.307"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.926s0,0,0,.001c-.171-.353-.396-.677-.666-.962-1.451-1.528-3.867-1.591-5.395-.139-1.528,1.451-1.59,3.867-.139,5.395l5.48,5.694c.197,.205,.459,.307,.721,.307V4.926Z"
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

export default Heart2Half;
