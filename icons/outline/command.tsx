import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Command({
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
          height="4.5"
          width="4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.75"
          y="6.75"
        />
        <path
          d="M4.75,2.75h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25,2.75h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(18 -8.5) rotate(90)"
        />
        <path
          d="M13.25,11.25h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(26.5 26.5) rotate(-180)"
        />
        <path
          d="M4.75,11.25h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-8.5 18) rotate(-90)"
        />
      </g>
    </svg>
  );
}

export default Command;
