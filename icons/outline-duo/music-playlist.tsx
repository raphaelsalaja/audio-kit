import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicPlaylist({
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
          d="M7.75 11.75C8.57843 11.75 9.25 11.0784 9.25 10.25C9.25 9.42157 8.57843 8.75 7.75 8.75C6.92157 8.75 6.25 9.42157 6.25 10.25C6.25 11.0784 6.92157 11.75 7.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8 16.182C4.469 15.695 1.75 12.665 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 9.339 16.227 9.673 16.182 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 16.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 12.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 11.75C8.57843 11.75 9.25 11.0784 9.25 10.25C9.25 9.42157 8.57843 8.75 7.75 8.75C6.92157 8.75 6.25 9.42157 6.25 10.25C6.25 11.0784 6.92157 11.75 7.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 10.25V4.75C9.567 5.073 9.98 5.442 10.5 5.797C10.95 6.104 11.379 6.332 11.75 6.5"
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

export default MusicPlaylist;
