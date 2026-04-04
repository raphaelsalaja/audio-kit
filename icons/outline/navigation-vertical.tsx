import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NavigationVertical({
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
          height="3"
          width="3"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="7.5"
        />
        <rect
          height="3"
          width="3"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="1.75"
        />
        <rect
          height="3"
          width="3"
          fill="none"
          rx=".75"
          ry=".75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="13.25"
        />
        <path
          d="m9.1842,6.7703l6.8539,2.5043c.2888.1055.2804.5168-.0124.6105l-3.1368,1.0038-1.0038,3.1368c-.0937.2928-.505.3012-.6105.0124l-2.5043-6.8539c-.0942-.2578.156-.5081.4139-.4139Z"
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

export default NavigationVertical;
