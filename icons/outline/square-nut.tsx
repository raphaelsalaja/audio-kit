import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareNut({
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
        <rect
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <path
          d="M12.25,10.309v-2.618c0-.357-.19-.686-.498-.865l-2.25-1.305c-.31-.18-.693-.18-1.003,0l-2.25,1.305c-.308,.179-.498,.508-.498,.865v2.618c0,.357,.19,.686,.498,.865l2.25,1.305c.31,.18,.693,.18,1.003,0l2.25-1.305c.308-.179,.498-.508,.498-.865Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="1" stroke="none" />
      </g>
    </svg>
  );
}

export default SquareNut;
