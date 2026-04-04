import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Qrcode({
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
          height="5"
          width="5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <rect
          height="5"
          width="5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="2.75"
        />
        <rect
          height="5"
          width="5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="10.25"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          stroke="none"
          x="4.5"
          y="4.5"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          stroke="none"
          x="12"
          y="4.5"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={fill}
          stroke="none"
          x="4.5"
          y="12"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          stroke="none"
          x="14.5"
          y="14.5"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          stroke="none"
          x="13"
          y="13"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          stroke="none"
          x="14.5"
          y="11.5"
        />
        <rect
          height="1.5"
          width="2"
          fill={secondaryfill}
          stroke="none"
          x="11"
          y="14.5"
        />
        <rect
          height="3"
          width="1.5"
          fill={secondaryfill}
          stroke="none"
          x="9.5"
          y="11.5"
        />
        <rect
          height="1.5"
          width="3.5"
          fill={secondaryfill}
          stroke="none"
          x="11"
          y="10"
        />
      </g>
    </svg>
  );
}

export default Qrcode;
