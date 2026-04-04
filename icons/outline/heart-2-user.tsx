import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2User({
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
        <circle
          cx="13.25"
          cy="10.5"
          fill={secondaryfill}
          r="1.5"
          strokeWidth="0"
        />
        <path
          d="m15.9874,7.9551c.2821-.73.35-1.5571.1287-2.3992-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7581-4.933-1.05-6.007,1.1619-.171-.353-.396-.677-.666-.9619-1.451-1.5281-3.867-1.5911-5.395-.1392-1.528,1.4512-1.59,3.8669-.139,5.395l5.0804,5.2788"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.3511,17h-4.2021c-.4067,0-.7905-.1987-1.0273-.5317-.2324-.3276-.293-.7476-.1621-1.123.4883-1.4023,1.8105-2.3452,3.2905-2.3452s2.8022.9429,3.291,2.3457c.1304.375.0698.7949-.1626,1.1226-.2368.333-.6206.5317-1.0273.5317Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Heart2User;
