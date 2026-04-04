import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.545"
          x2="14.25"
          y1="15.25"
          y2="15.25"
        />
        <path
          d="M9.789,12.123l-4.884-2.466c-.539-.272-.716-.957-.375-1.456l3.766-5.523c.565-.829,1.658-1.111,2.554-.659l1.557,.786c.896,.452,1.318,1.499,.986,2.446l-2.208,6.309c-.2,.57-.855,.835-1.395,.562Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.023,12.245c-1.994,.516-2.965,1.989-3.252,2.559l-1.116-.563s-1.116-.563-1.116-.563c.288-.57,.896-2.226,.128-4.136"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="6.77 14.804 6.545 15.25 3.75 15.25 4.539 13.677"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TextHighlight;
