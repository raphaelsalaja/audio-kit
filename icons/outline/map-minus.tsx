import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapMinus({
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
        <path
          d="M16.25 11.75V4.9971C16.25 4.357 15.658 3.8821 15.033 4.021L12.035 4.687C11.849 4.728 11.655 4.71609 11.476 4.65089L6.52399 2.8501C6.34499 2.7849 6.151 2.77199 5.965 2.81399L2.53299 3.5769C2.07499 3.679 1.75 4.08499 1.75 4.55299V13.003C1.75 13.6431 2.34201 14.118 2.96701 13.9791L5.965 13.3131C6.151 13.2721 6.34499 13.284 6.52399 13.3492L9.28989 14.3546"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.75H12.25"
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

export default MapMinus;
