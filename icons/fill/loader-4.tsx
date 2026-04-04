import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader4({
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
        <circle cx="9" cy="2.75" fill={fill} r="1.75" strokeWidth="0" />
        <circle
          cx="15.25"
          cy="9"
          fill={fill}
          opacity=".75"
          r="1.75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="15.25"
          fill={fill}
          opacity=".5"
          r="1.75"
          strokeWidth="0"
        />
        <circle
          cx="2.75"
          cy="9"
          fill={fill}
          opacity=".25"
          r="1.75"
          strokeWidth="0"
        />
        <path
          d="m13.4194,6.3296c.4482,0,.896-.1704,1.2373-.5117.6821-.6821.6821-1.7925,0-2.4746-.6826-.6826-1.792-.6826-2.4746,0-.6821.6821-.6821,1.7925,0,2.4746.3413.3413.7891.5117,1.2373.5117Z"
          fill={fill}
          opacity=".88"
          strokeWidth="0"
        />
        <path
          d="m12.1821,12.1821c-.6821.6821-.6821,1.7925,0,2.4746.3413.3413.7891.5117,1.2373.5117s.896-.1704,1.2373-.5117c.6821-.6821.6821-1.7925,0-2.4746-.6826-.6826-1.792-.6826-2.4746,0Z"
          fill={fill}
          opacity=".63"
          strokeWidth="0"
        />
        <path
          d="m3.3433,12.1821c-.6821.6821-.6821,1.7925,0,2.4746.3413.3413.7891.5117,1.2373.5117s.896-.1704,1.2373-.5117c.6821-.6821.6821-1.7925,0-2.4746-.6826-.6826-1.792-.6826-2.4746,0Z"
          fill={fill}
          opacity=".38"
          strokeWidth="0"
        />
        <path
          d="m3.3433,3.3433c-.6821.6821-.6821,1.7925,0,2.4746.3413.3413.7891.5117,1.2373.5117s.896-.1704,1.2373-.5117c.6821-.6821.6821-1.7925,0-2.4746-.6826-.6826-1.792-.6826-2.4746,0Z"
          fill={fill}
          opacity=".13"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Loader4;
