import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPlaylist({
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
          d="M11.152 8.568L7.50102 6.439C7.16802 6.245 6.74902 6.485 6.74902 6.871V11.13C6.74902 11.516 7.16802 11.756 7.50102 11.562L11.152 9.433C11.483 9.24 11.483 8.762 11.152 8.569V8.568Z"
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
          d="M11.152 8.568L7.50102 6.439C7.16802 6.245 6.74902 6.485 6.74902 6.871V11.13C6.74902 11.516 7.16802 11.756 7.50102 11.562L11.152 9.433C11.483 9.24 11.483 8.762 11.152 8.569V8.568Z"
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

export default MediaPlaylist;
