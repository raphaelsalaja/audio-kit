import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box2Search({
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
          d="M8.906 1.93101L15.25 4.75001L8.906 7.56901C8.647 7.68401 8.352 7.68401 8.094 7.56901L1.75 4.75001L8.094 1.93101C8.353 1.81601 8.648 1.81601 8.906 1.93101Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.5 7.65601V16.069"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.4934V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 4.75V12.6C1.75 12.995 1.98299 13.353 2.34399 13.514L8.09399 16.07C8.22339 16.1274 8.3618 16.1562 8.5 16.1562"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 9.24998V6.08298L11.5 3.08298"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.906 1.93101L15.25 4.75001L8.906 7.56901C8.647 7.68401 8.352 7.68401 8.094 7.56901L1.75 4.75001L8.094 1.93101C8.353 1.81601 8.648 1.81601 8.906 1.93101Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.41 15.66C14.6526 15.66 15.66 14.6526 15.66 13.41C15.66 12.1674 14.6526 11.16 13.41 11.16C12.1673 11.16 11.16 12.1674 11.16 13.41C11.16 14.6526 12.1673 15.66 13.41 15.66Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 15L16.66 16.66"
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

export default Box2Search;
