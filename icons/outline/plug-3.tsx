import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug3({
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
          x1="9.2396"
          x2="11.3609"
          y1="4.8713"
          y2="2.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.1287"
          x2="15.25"
          y1="8.7604"
          y2="6.6391"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.5"
          x2="4.8202"
          y1="15.5"
          y2="13.1798"
        />
        <path
          d="m7.4718,3.1036l7.4246,7.4246c.3903.3903.3903,1.0239,0,1.4142l-1.2374,1.2374c-2.4388,2.4388-6.4,2.4388-8.8388,0h0c-2.4388-2.4388-2.4388-6.4,0-8.8388l1.2374-1.2374c.3903-.3903,1.0239-.3903,1.4142,0Z"
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

export default Plug3;
