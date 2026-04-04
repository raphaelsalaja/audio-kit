import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImmersiveSlider({
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
          height="8"
          width="8.5"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
          x="4.75"
          y="4.75"
        />
        <path
          d="m13.25,4.75H4.75l-2.6113-1.7409c-.1661-.1108-.3887.0083-.3887.208v11.0657c0,.1997.2225.3188.3887.208l2.6113-1.7409h8.5l2.6113,1.7409c.1661.1108.3887-.0083.3887-.208V3.2171c0-.1997-.2225-.3188-.3887-.208l-2.6113,1.7409Z"
          fill="none"
          stroke={fill}
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
          x1="4.75"
          x2="4.75"
          y1="4.75"
          y2="12.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.25"
          x2="13.25"
          y1="4.75"
          y2="12.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="12.25"
          y1="15.75"
          y2="15.75"
        />
        <circle cx="5.75" cy="15.75" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ImmersiveSlider;
