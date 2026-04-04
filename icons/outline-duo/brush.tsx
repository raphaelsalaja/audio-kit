import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Brush({
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
          d="M3.75 8.75V3.75C3.75 2.6454 4.6454 1.75 5.75 1.75H14.25V8.75"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 1.75V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 8.75V3.75C3.75 2.6454 4.6454 1.75 5.75 1.75H14.25V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 8.75V9.49899C3.75 10.5014 4.4921 11.349 5.4857 11.4815L7.5 11.7501L7.2094 14.5111C7.0975 15.5742 7.9311 16.5001 9 16.5001C10.069 16.5001 10.9025 15.5742 10.7906 14.5111L10.5 11.7501L12.5143 11.4815C13.5079 11.349 14.25 10.5014 14.25 9.49899V8.75H3.75Z"
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

export default Brush;
