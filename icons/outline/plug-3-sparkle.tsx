import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug3Sparkle({
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.7396"
          x2="11.8609"
          y1="4.3713"
          y2="2.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.6287"
          x2="15.75"
          y1="8.2604"
          y2="6.1391"
        />
        <path
          d="m8.4521,14.3718c1.9966.418,4.1583-.1436,5.7068-1.6921l1.2374-1.2373c.3903-.3904.3903-1.0239,0-1.4143L7.9718,2.6035c-.3903-.3904-1.0239-.3904-1.4142,0l-1.2374,1.2375c-.7239.7239-1.2276,1.5833-1.5217,2.4958"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill={secondaryfill}
          points="4.9167 12.75 2.25 12.75 4.5 9.25 3.5833 12.25 6.25 12.25 4 15.75 4.9167 12.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Plug3Sparkle;
