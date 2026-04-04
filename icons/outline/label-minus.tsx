import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelMinus({
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
          cy="6.75"
          fill={secondaryfill}
          r="1.25"
          strokeWidth="0"
        />
        <path
          d="m14.25,9.75v-2.7117c0-.5649-.239-1.104-.658-1.4829l-3.921-3.5471c-.381-.345-.961-.345-1.342,0l-3.921,3.5471c-.419.3789-.658.918-.658,1.4829v7.2117c0,1.105.895,2,2,2h6.5c.504,0,.959-.1926,1.3106-.5"
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
          x1="16.75"
          x2="11.75"
          y1="12.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default LabelMinus;
