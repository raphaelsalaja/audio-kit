import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkSlash({
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
          d="m14.25,3.75c0-1.105-.895-2-2-2h-6.5c-1.105,0-2,.895-2,2v10.5L14.25,3.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m3.75,14.25V3.75c0-1.105.895-2,2-2h6.5c1.105,0,2,.895,2,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,16L16,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          points="13.7675 7.4498 8.7439 12.4734 9 12.75 14.25 16.25 13.7675 7.4498"
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="14.25 7.9922 14.25 16.25 9.2953 12.9469"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BookmarkSlash;
