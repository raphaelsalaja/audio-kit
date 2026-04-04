import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaLibrary({
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
          d="M12.211,6.984l-2.296-1.385c-.402-.243-.915,.047-.915,.516v2.771c0,.47,.513,.759,.915,.516l2.296-1.385c.389-.235,.389-.798,0-1.033Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M1.75,6.75v6.5c0,1.105,.895,2,2,2H12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="9.5"
          width="11.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(21 15) rotate(180)"
          x="4.75"
          y="2.75"
        />
      </g>
    </svg>
  );
}

export default MediaLibrary;
