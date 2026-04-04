import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShoeSneakers({
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
          x1="5.838"
          x2="17.217"
          y1="10.75"
          y2="10.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.038"
          x2="10.235"
          y1="5.619"
          y2="6.905"
        />
        <path
          d="M1.25,9.065l3.283,.72c.609,.135,1.12,.548,1.382,1.114l1.085,2.351"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.911,4.106c-.504,1.313-1.726,2.144-3.217,2.144s-2.756-.937-3.26-2.25h-.184c-.552,0-1,.448-1,1v6.25c0,1.104,.895,2,2,2H15.125c1.174,0,2.125-.951,2.125-2.125,0-.744-.383-1.396-.962-1.776L8.045,3.488"
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

export default ShoeSneakers;
