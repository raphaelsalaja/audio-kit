import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reading({
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
          d="m9,9.5l-4.9452-1.5825c-.6453-.2065-1.3048.2749-1.3048.9524v4.6501c0,.4349.281.8199.6952.9524l5.25,1.68c.1982.0634.4113.0634.6096,0l5.25-1.68c.4142-.1325.6952-.5176.6952-.9524v-4.6501c0-.6775-.6595-1.1589-1.3048-.9524l-4.9452,1.5825Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="4"
          fill="none"
          r="2.25"
          stroke={secondaryfill}
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
          y1="9.5"
          y2="16.1042"
        />
      </g>
    </svg>
  );
}

export default Reading;
