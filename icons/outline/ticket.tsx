import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket({
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
          height="3.5"
          width="5.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="7.25"
        />
        <path
          d="M14.5,9c0-.967,.784-1.75,1.75-1.75v-1.5c0-1.104-.895-2-2-2H3.75c-1.105,0-2,.896-2,2v1.5c.966,0,1.75,.783,1.75,1.75s-.784,1.75-1.75,1.75v1.5c0,1.104,.895,2,2,2H14.25c1.105,0,2-.896,2-2v-1.5c-.966,0-1.75-.783-1.75-1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Ticket;
