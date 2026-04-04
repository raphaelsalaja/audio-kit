import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections3({
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
          height="3.889"
          width="3.889"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(5.636 -5.121) rotate(45)"
          x="7.055"
          y="2.298"
        />
        <rect
          height="3.889"
          width="3.889"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-5.121 5.636) rotate(-45)"
          x="2.298"
          y="7.055"
        />
        <rect
          height="3.889"
          width="3.889"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(5.636 29.849) rotate(-135)"
          x="7.055"
          y="11.813"
        />
        <rect
          height="3.889"
          width="3.889"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(29.849 5.636) rotate(135)"
          x="11.813"
          y="7.055"
        />
      </g>
    </svg>
  );
}

export default Connections3;
