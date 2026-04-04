import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IsolatedCube({
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
        <circle cx="2" cy="2" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="16" cy="2" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="2" cy="16" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="16" cy="16" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M8.157,3.399l-3.57,2.071c-.518,.301-.837,.854-.837,1.453v4.155c0,.599,.319,1.153,.837,1.453l3.57,2.071c.521,.302,1.165,.302,1.686,0l3.57-2.071c.518-.301,.837-.854,.837-1.453V6.923c0-.599-.319-1.153-.837-1.453l-3.57-2.071c-.521-.302-1.165-.302-1.686,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.026 6.085 9 9 3.974 6.085"
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
          x1="9"
          x2="9"
          y1="14.828"
          y2="9"
        />
      </g>
    </svg>
  );
}

export default IsolatedCube;
