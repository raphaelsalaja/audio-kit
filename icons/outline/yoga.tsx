import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Yoga({
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
          cx="9"
          cy="2.25"
          fill="none"
          r="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25,6.75l-1.646,1.646c-.195,.195-.512,.195-.707,0l-1.561-1.561c-.375-.375-.884-.586-1.414-.586h-.922s-.922,0-.922,0c-.53,0-1.039,.211-1.414,.586l-1.561,1.561c-.195,.195-.512,.195-.707,0l-1.646-1.646"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,12.589c.155,.176,.25,.408,.25,.661h0c0,.552-.448,1-1,1h-2.596c-.775,0-1.404-.629-1.404-1.404h0c0-.644,.438-1.206,1.063-1.362l1.937-.484V6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75,6.5v4.5s1.937,.484,1.937,.484c.625,.156,1.063,.718,1.063,1.362h0c0,.775-.629,1.404-1.404,1.404h-.74"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.25"
          x2="15.75"
          y1="16.75"
          y2="16.75"
        />
      </g>
    </svg>
  );
}

export default Yoga;
