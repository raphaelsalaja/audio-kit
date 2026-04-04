import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarriage({
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
          d="M3.75 7.75H15.25V9.25C15.25 10.906 13.906 12.25 12.25 12.25H6.75C5.094 12.25 3.75 10.906 3.75 9.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 7.75V1.75C12.788 1.75 15.25 4.212 15.25 7.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 16.5C5.94 16.5 6.5 15.9404 6.5 15.25C6.5 14.5596 5.94 14 5.25 14C4.56 14 4 14.5596 4 15.25C4 15.9404 4.56 16.5 5.25 16.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 16.5C14.44 16.5 15 15.9404 15 15.25C15 14.5596 14.44 14 13.75 14C13.06 14 12.5 14.5596 12.5 15.25C12.5 15.9404 13.06 16.5 13.75 16.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.75 7.75H15.25V9.25C15.25 10.906 13.906 12.25 12.25 12.25H6.75C5.094 12.25 3.75 10.906 3.75 9.25V7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 4.75H2.25C3.078 4.75 3.75 5.422 3.75 6.25V7.75"
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

export default BabyCarriage;
