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
        <path
          d="M15.1219 11.543L16.9576 9.70738C17.3481 9.31686 17.3481 8.68369 16.9576 8.29317L15.1219 6.45752C14.7314 6.06699 14.0982 6.06699 13.7077 6.45752L11.8721 8.29317C11.4815 8.68369 11.4815 9.31686 11.8721 9.70738L13.7077 11.543C14.0982 11.9336 14.7314 11.9336 15.1219 11.543Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.79239 5.04327L7.95674 3.20763C7.56622 2.8171 6.93305 2.8171 6.54253 3.20763L4.70688 5.04327C4.31635 5.4338 4.31635 6.06696 4.70688 6.45749L6.54253 8.29314C6.93305 8.68366 7.56622 8.68366 7.95674 8.29314L9.79239 6.45749C10.1829 6.06696 10.1829 5.4338 9.79239 5.04327Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.70676 12.9575L6.5424 14.7932C6.93293 15.1837 7.56609 15.1837 7.95662 14.7932L9.79227 12.9575C10.1828 12.567 10.1828 11.9338 9.79227 11.5433L7.95662 9.70766C7.56609 9.31713 6.93293 9.31713 6.54241 9.70766L4.70676 11.5433C4.31623 11.9338 4.31623 12.567 4.70676 12.9575Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.1219 11.543L16.9576 9.70738C17.3481 9.31686 17.3481 8.68369 16.9576 8.29317L15.1219 6.45752C14.7314 6.06699 14.0982 6.06699 13.7077 6.45752L11.8721 8.29317C11.4815 8.68369 11.4815 9.31686 11.8721 9.70738L13.7077 11.543C14.0982 11.9336 14.7314 11.9336 15.1219 11.543Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.70701 11.543C4.31601 11.934 3.68301 11.934 3.29301 11.543L1.45701 9.70701C1.06601 9.31601 1.06601 8.68301 1.45701 8.29301L3.29301 6.45701C3.68401 6.06601 4.31701 6.06601 4.70701 6.45701"
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
