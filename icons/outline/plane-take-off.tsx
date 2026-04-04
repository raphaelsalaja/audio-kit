import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneTakeOff({
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
          x1="2.75"
          x2="15.25"
          y1="15.25"
          y2="15.25"
        />
        <path
          d="M1.25,9.75l1.228-.819c.333-.222,.767-.224,1.102-.005l1.42,.928,9.489-3.972c.831-.361,1.797,.031,2.14,.87h0c.334,.817-.049,1.75-.86,2.097l-7.904,3.25c-.241,.099-.5,.15-.761,.15h-2.467c-.52,0-1.019-.202-1.393-.564l-1.995-1.936Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8,8.607L3,5l1.476-.854c.292-.169,.649-.179,.95-.028l6.032,3.033"
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

export default PlaneTakeOff;
