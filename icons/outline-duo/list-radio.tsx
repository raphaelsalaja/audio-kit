import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListRadio({
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
          d="M4.25 7.75C5.63071 7.75 6.75 6.63071 6.75 5.25C6.75 3.86929 5.63071 2.75 4.25 2.75C2.86929 2.75 1.75 3.86929 1.75 5.25C1.75 6.63071 2.86929 7.75 4.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 7.75C5.63071 7.75 6.75 6.63071 6.75 5.25C6.75 3.86929 5.63071 2.75 4.25 2.75C2.86929 2.75 1.75 3.86929 1.75 5.25C1.75 6.63071 2.86929 7.75 4.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6C4.66421 6 5 5.66421 5 5.25C5 4.83579 4.66421 4.5 4.25 4.5C3.83579 4.5 3.5 4.83579 3.5 5.25C3.5 5.66421 3.83579 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.25 15.25C5.63071 15.25 6.75 14.1307 6.75 12.75C6.75 11.3693 5.63071 10.25 4.25 10.25C2.86929 10.25 1.75 11.3693 1.75 12.75C1.75 14.1307 2.86929 15.25 4.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 5.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 12.75H16.25"
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

export default ListRadio;
