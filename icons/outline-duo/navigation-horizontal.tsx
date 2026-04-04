import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NavigationHorizontal({
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
          fill={secondaryfill}
          opacity=".3"
          rx=".75"
          ry=".75"
          strokeWidth="0"
          transform="translate(13.25 -4.75) rotate(90)"
          x="7.5"
          y="2.75"
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
          transform="translate(13.25 -4.75) rotate(90)"
          x="7.5"
          y="2.75"
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
          transform="translate(19 -10.5) rotate(90)"
          x="13.25"
          y="2.75"
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
          transform="translate(7.5 1) rotate(90)"
          x="1.75"
          y="2.75"
        />
        <path
          d="m11.2297,9.1842l-2.5043,6.8539c-.1055.2888-.5168.2804-.6105-.0124l-1.0038-3.1368-3.1368-1.0038c-.2928-.0937-.3012-.505-.0124-.6105l6.8539-2.5043c.2578-.0942.5081.156.4139.4139Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.2297,9.1842l-2.5043,6.8539c-.1055.2888-.5168.2804-.6105-.0124l-1.0038-3.1368-3.1368-1.0038c-.2928-.0937-.3012-.505-.0124-.6105l6.8539-2.5043c.2578-.0942.5081.156.4139.4139Z"
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

export default NavigationHorizontal;
