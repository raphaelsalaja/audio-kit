import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen3({
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
          d="M9 16.25C9 15.145 9.895 14.25 11 14.25H15.25C15.802 14.25 16.25 13.802 16.25 13.25V3.75C16.25 3.198 15.802 2.75 15.25 2.75H11C9.895 2.75 9 3.645 9 4.75"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C9 15.145 9.895 14.25 11 14.25H15.25C15.802 14.25 16.25 13.802 16.25 13.25V3.75C16.25 3.198 15.802 2.75 15.25 2.75H11C9.895 2.75 9 3.645 9 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25V4.75C9 3.645 8.105 2.75 7 2.75H2.75C2.198 2.75 1.75 3.198 1.75 3.75V13.25C1.75 13.802 2.198 14.25 2.75 14.25H7C8.105 14.25 9 15.145 9 16.25Z"
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

export default BookOpen3;
