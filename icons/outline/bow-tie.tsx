import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowTie({
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
          d="M10.75,10.25c.415,.508,1.118,1.241,2.191,1.875,.804,.475,1.584,.757,2.232,.927,.544,.143,1.096-.216,1.217-.765,.284-1.282,.36-2.409,.36-3.286s-.076-2.005-.36-3.286c-.122-.549-.673-.908-1.217-.765-.647,.17-1.427,.451-2.232,.927-1.073,.634-1.776,1.367-2.191,1.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25,10.25c-.415,.508-1.118,1.241-2.191,1.875-.804,.475-1.584,.757-2.232,.927-.544,.143-1.096-.216-1.217-.765-.284-1.282-.36-2.409-.36-3.286s.076-2.005,.36-3.286c.122-.549,.673-.908,1.217-.765,.647,.17,1.427,.451,2.232,.927,1.073,.634,1.776,1.367,2.191,1.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="5.5"
          width="3.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.25"
          y="6.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="13.25"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.25"
          x2="4.75"
          y1="9"
          y2="9"
        />
      </g>
    </svg>
  );
}

export default BowTie;
