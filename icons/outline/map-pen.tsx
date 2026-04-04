import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPen({
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
          d="M16.25 7.5571V4.99699C16.25 4.35689 15.658 3.882 15.033 4.0209L12.035 4.6869C11.849 4.7279 11.655 4.716 11.476 4.6508L6.52399 2.85001C6.34499 2.78481 6.151 2.7719 5.965 2.8139L2.53299 3.5768C2.07499 3.6789 1.75 4.0849 1.75 4.5529V13.0029C1.75 13.643 2.34201 14.1179 2.96701 13.979L5.965 13.313C6.151 13.272 6.34499 13.2839 6.52399 13.3491L8.63049 14.1152"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 15.9542L16.9571 12.793C17.3476 12.4025 17.3476 11.7693 16.9571 11.3788L16.3713 10.793C15.9808 10.4025 15.3476 10.4025 14.9571 10.793L11.7959 13.9542L11.0001 16.7501L13.7959 15.9542Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MapPen;
