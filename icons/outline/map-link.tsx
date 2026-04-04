import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapLink({
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
          d="M12 16.5H11.5C10.5335 16.5 9.75 15.7165 9.75 14.75V13.75C9.75 12.7835 10.5335 12 11.5 12H12"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.5H15.5C16.4665 16.5 17.25 15.7165 17.25 14.75V13.75C17.25 12.7835 16.4665 12 15.5 12H15"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.0759V4.99699C16.25 4.35689 15.658 3.882 15.033 4.0209L12.035 4.6869C11.849 4.7279 11.655 4.716 11.476 4.6508L6.524 2.85001C6.345 2.78481 6.151 2.7719 5.965 2.8139L2.533 3.5768C2.075 3.6789 1.75 4.0849 1.75 4.5529V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L6.7811 13.4424"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.25H14.75"
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

export default MapLink;
