import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FacePouting({
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
          d="M6.103,13.243c.154,.154,.366,.221,.583,.189h0c1.532-.239,3.112-.238,4.638,.001,.214,.032,.421-.035,.572-.185,.154-.153,.227-.376,.193-.598-.23-1.511-1.558-2.651-3.089-2.651s-2.86,1.141-3.089,2.654c-.033,.216,.039,.436,.192,.589Z"
          fill={secondaryfill}
          stroke="none"
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6" cy="8.5" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="12" cy="8.5" fill={secondaryfill} r="1" stroke="none" />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.5"
          x2="7.25"
          y1="7"
          y2="8"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.5"
          x2="10.75"
          y1="7"
          y2="8"
        />
      </g>
    </svg>
  );
}

export default FacePouting;
