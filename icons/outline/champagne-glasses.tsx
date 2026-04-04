import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChampagneGlasses({
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
          d="M3.924,12.403h0c-1.389-.328-2.17-1.806-1.659-3.138l1.546-4.032,3.479,.847-.481,4.291c-.157,1.406-1.509,2.357-2.885,2.032Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.076,12.403h0c1.389-.328,2.17-1.806,1.659-3.138l-1.546-4.032-3.479,.847,.481,4.291c.157,1.406,1.509,2.357,2.885,2.032Z"
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
          x1="3.924"
          x2="2.948"
          y1="12.403"
          y2="16.344"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.248"
          x2="4.648"
          y1="15.93"
          y2="16.758"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.076"
          x2="15.052"
          y1="12.403"
          y2="16.344"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.752"
          x2="13.352"
          y1="15.93"
          y2="16.758"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1=".75"
          y2="2.5"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="6.25"
          y1="2"
          y2="3.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="11.75"
          y1="2"
          y2="3.25"
        />
      </g>
    </svg>
  );
}

export default ChampagneGlasses;
