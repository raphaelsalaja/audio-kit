import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections2({
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
          height="4.596"
          width="4.596"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(6.189 -3.442) rotate(45)"
          x="4.952"
          y="3.452"
        />
        <rect
          height="4.596"
          width="4.596"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(3.714 26.039) rotate(-135)"
          x="4.952"
          y="9.952"
        />
        <rect
          height="4.596"
          width="4.596"
          fill="none"
          rx="1"
          ry="1"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(30.971 5.172) rotate(135)"
          x="12.116"
          y="6.702"
        />
        <path
          d="M4.707,11.543c-.391,.391-1.024,.391-1.414,0l-1.836-1.836c-.391-.391-.391-1.024,0-1.414l1.836-1.836c.391-.391,1.024-.391,1.414,0"
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

export default Connections2;
