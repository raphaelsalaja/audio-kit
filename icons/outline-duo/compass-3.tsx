import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass3({
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
          d="M11 11L16.75 9L11 7L9 1.25L7 7L1.25 9L7 11L9 16.75L11 11Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.20101 7.626L7.00001 7L7.62601 5.201L4.13601 3.107C3.84101 2.93 3.46301 2.977 3.22001 3.22C2.97601 3.463 2.93001 3.841 3.10701 4.136L5.20101 7.626Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.374 5.20101L11 7.00001L12.799 7.62601L14.893 4.13601C15.07 3.84101 15.023 3.46301 14.78 3.22001C14.537 2.97601 14.159 2.93001 13.864 3.10701L10.374 5.20101Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.799 10.374L11 11L10.374 12.799L13.864 14.893C14.159 15.07 14.537 15.023 14.78 14.78C15.024 14.537 15.07 14.159 14.893 13.864L12.799 10.374Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.626 12.799L7 11L5.201 10.374L3.107 13.864C2.93 14.159 2.977 14.537 3.22 14.78C3.463 15.024 3.841 15.07 4.136 14.893L7.626 12.799Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11 11L16.75 9L11 7L9 1.25L7 7L1.25 9L7 11L9 16.75L11 11Z"
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

export default Compass3;
