import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandPointingCube({
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
          d="M8.25,4.25v-.821c0-.428-.228-.823-.598-1.038L5.102,.912c-.372-.216-.832-.216-1.204,0L1.348,2.391c-.37,.215-.598,.61-.598,1.038v2.968c0,.428,.228,.823,.598,1.038l2.55,1.479c.186,.108,.394,.162,.602,.162"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25,15.225c0-2.059-.236-3.639-1-4.223-.875-.669-3.152-.838-5.295-.232l-1.33-2.827c-.293-.626-1.037-.896-1.663-.603h0c-.625,.292-.896,1.036-.604,1.661l2.561,5.456-2.724-.501c-.587-.108-1.167,.224-1.371,.785h0c-.232,.637,.098,1.34,.736,1.569l2.616,.941"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="8.09 2.831 4.5 4.913 .91 2.831"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.5"
          x2="4.5"
          y1="9.076"
          y2="4.913"
        />
      </g>
    </svg>
  );
}

export default HandPointingCube;
