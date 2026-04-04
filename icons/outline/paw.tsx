import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paw({
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
        <ellipse
          cx="6.25"
          cy="4.5"
          fill="none"
          rx="1.5"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <ellipse
          cx="2.75"
          cy="8.75"
          fill={fill}
          rx="1"
          ry="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <ellipse
          cx="11.75"
          cy="4.5"
          fill="none"
          rx="1.5"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <ellipse
          cx="15.25"
          cy="8.75"
          fill={fill}
          rx="1"
          ry="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.75,13.625c0,.4309.1919.8443.5335,1.149.3416.3048.8049.476,1.2879.476,1.2143,0,1.2143-.75,2.4286-.75s1.2143.75,2.4286.75c.483,0,.9464-.1712,1.2879-.476.3416-.3047.5335-.7181.5335-1.149,0-2.1667-2.4286-4.875-4.25-4.875s-4.25,2.7083-4.25,4.875Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Paw;
