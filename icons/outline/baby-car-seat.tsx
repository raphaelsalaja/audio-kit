import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarSeat({
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
          x1="7"
          x2="13"
          y1="10.5"
          y2="4.5"
        />
        <circle cx="7" cy="10.5" fill={secondaryfill} r="1.5" stroke="none" />
        <path
          d="M5.928,7.446l-.484-2.997c-.175-1.091-1.2-1.833-2.291-1.659l-.987,.158,1.552,9.62c.156,.969,.993,1.681,1.974,1.681h7.398c1.676,0,2.381-1.364,2.096-2.512-.171-.689-.735-1.252-1.424-1.424-.696-.174-1.346,.019-1.81,.422-.347,.301-.761,.514-1.22,.514h-.578"
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

export default BabyCarSeat;
