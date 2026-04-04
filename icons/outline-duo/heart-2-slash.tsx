import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Slash({
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
          d="m14.5693,3.4307c-1.9718-1.3154-4.572-.5588-5.5703,1.4973-.171-.353-.396-.678-.666-.962-1.451-1.528-3.867-1.591-5.395-.139-1.528,1.451-1.591,3.867-.139,5.395l2.9322,3.0467L14.5693,3.4307Zm-7.2602,10.4775l.9699,1.0078c.393.409,1.048.409,1.441,0l5.48-5.694c.882-.928,1.279-2.283.916-3.666-.0307-.1167-.3197.0205-.3623-.0925L7.3091,13.9082Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.731,12.269l-2.932-3.047c-1.452-1.528-1.389-3.944.139-5.395,1.528-1.452,3.944-1.389,5.395.139.27.284.495.609.666.962.998-2.056,3.598-2.813,5.57-1.497"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.8115,14.4307l.4675.4854c.393.4089,1.048.4089,1.441,0l5.48-5.6941c.7794-.8198,1.1728-1.9741,1.0051-3.1848"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.75"
          x2="16"
          y1="15.25"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default Heart2Slash;
