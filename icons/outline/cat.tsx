import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cat({
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
          d="M2.25,10V2.172c0-.603,.676-.96,1.174-.619l3.576,2.447"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,10V2.172c0-.603-.676-.96-1.174-.619l-3.576,2.447"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,13.417c.434-.477,.801-.967,1-1.491-.333-.117-.667-.175-1-.175-.333,0-.667,.058-1,.175,.199,.524,.566,1.015,1,1.491h0Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.442,11.871c.2-.591,.308-1.219,.308-1.871,0-3.452-3.022-6.25-6.75-6.25-3.728,0-6.75,2.798-6.75,6.25,0,.652,.108,1.28,.308,1.871"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.655,15.748c-.815,.323-1.713,.502-2.655,.502-.943,0-1.84-.179-2.655-.502"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6" cy="9.5" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="12" cy="9.5" fill={secondaryfill} r="1" stroke="none" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.25"
          x2=".75"
          y1="11.75"
          y2="12"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="1.5"
          y1="13.5"
          y2="15"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="17.25"
          y1="11.75"
          y2="12"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="16.5"
          y1="13.5"
          y2="15"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="13"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default Cat;
