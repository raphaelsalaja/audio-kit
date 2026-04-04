import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoccerGoal({
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
          d="m10,1.75c-3.452,0-6.25,2.798-6.25,6.25s2.798,6.25,6.25,6.25,6.25-2.798,6.25-6.25S13.452,1.75,10,1.75Zm-.424,9.178l-2.505-2.505,1.557-3.105,3.5.554.553,3.499-3.105,1.557Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.581,12.419c-2.441-2.441-2.441-6.398,0-8.839s6.398-2.441,8.839,0,2.441,6.398,0,8.839c-1.807,1.807-4.444,2.276-6.683,1.408"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.992,15.741l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.104-.305-.257-.356h.001Z"
          fill={fill}
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="13.383 2.744 13.497 4.503 15.256 4.617"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="6.046 3.159 7.754 3.594 8.407 1.955"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="4.174 10.264 5.115 8.774 3.759 7.648"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="10.352 14.241 9.226 12.885 7.737 13.827"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="16.044 9.593 14.407 10.245 14.842 11.953"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="12.127 5.873 8.628 5.318 7.071 8.424 9.576 10.928 12.681 9.372 12.127 5.873"
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
          x1="13.497"
          x2="12.127"
          y1="4.503"
          y2="5.873"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.754"
          x2="8.628"
          y1="3.594"
          y2="5.318"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.681"
          x2="14.407"
          y1="9.372"
          y2="10.245"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.115"
          x2="7.071"
          y1="8.774"
          y2="8.424"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.576"
          x2="9.226"
          y1="10.928"
          y2="12.885"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="6.5"
          y1="16.25"
          y2="11.5"
        />
        <circle cx="1.75" cy="11.75" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default SoccerGoal;
