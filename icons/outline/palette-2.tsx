import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Palette2({
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
          d="m8.3034,16.217c-3.7776-.3601-6.7098-3.619-6.5469-7.5271.157-3.7659,3.3501-6.8755,7.1188-6.9388,4.0612-.0683,7.3747,3.2034,7.3747,7.2489h0c0,1.5188-1.2312,2.75-2.75,2.75h-2.963c-1.0336,0-1.6928,1.1036-1.2027,2.0137l.2374.4409c.2597.4823.2062,1.0732-.1361,1.501h0c-.2736.342-.6962.553-1.1322.5115Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="5" fill={secondaryfill} r="1" strokeWidth="0" />
        <circle
          cx="6.1716"
          cy="6.1716"
          fill={secondaryfill}
          r="1"
          strokeWidth="0"
        />
        <circle
          cx="11.8284"
          cy="6.1716"
          fill={secondaryfill}
          r="1"
          strokeWidth="0"
        />
        <circle cx="5" cy="9" fill={secondaryfill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Palette2;
