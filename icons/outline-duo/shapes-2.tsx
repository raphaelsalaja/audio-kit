import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shapes2({
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
          d="M6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5 15.5C6.38071 15.5 7.5 14.3807 7.5 13C7.5 11.6193 6.38071 10.5 5 10.5C3.61929 10.5 2.5 11.6193 2.5 13C2.5 14.3807 3.61929 15.5 5 15.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.567 2.57601L10.301 6.50001C10.109 6.83301 10.349 7.25001 10.734 7.25001H15.265C15.65 7.25001 15.89 6.83301 15.698 6.50001L13.432 2.57601C13.24 2.24301 12.758 2.24301 12.566 2.57601H12.567Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 15.5C6.38071 15.5 7.5 14.3807 7.5 13C7.5 11.6193 6.38071 10.5 5 10.5C3.61929 10.5 2.5 11.6193 2.5 13C2.5 14.3807 3.61929 15.5 5 15.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 10.5V15.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 13H15.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.567 2.57601L10.301 6.50001C10.109 6.83301 10.349 7.25001 10.734 7.25001H15.265C15.65 7.25001 15.89 6.83301 15.698 6.50001L13.432 2.57601C13.24 2.24301 12.758 2.24301 12.566 2.57601H12.567Z"
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

export default Shapes2;
