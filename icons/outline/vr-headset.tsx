import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset({
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
          d="M9,4.724c2.142,0,4.81,.077,6.131,1.12,1.321,1.042,1.815,2.119,1.55,4.047-.264,1.928-1.462,2.97-2.848,3.283-1.386,.313-2.512-.142-3.092-.755-.625-.66-.956-1.222-1.741-1.222-.786,0-1.116,.562-1.741,1.222-.58,.612-1.706,1.068-3.092,.755-1.386-.313-2.584-1.355-2.848-3.283-.264-1.928,.229-3.005,1.55-4.047,1.321-1.043,3.989-1.12,6.131-1.12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6,7.366c.693-.085,1.659-.142,3-.142s2.307,.056,3,.142"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default VrHeadset;
