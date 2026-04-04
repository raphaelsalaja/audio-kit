import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function YogaMat({
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
          d="M2.25 12.25C2.25 13.631 3.369 14.75 4.75 14.75H14.75C15.302 14.75 15.75 14.302 15.75 13.75V5.25C15.75 4.698 15.302 4.25 14.75 4.25H10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 4.75V12.25C7.25 10.869 6.131 9.75 4.75 9.75C3.369 9.75 2.25 10.869 2.25 12.25V4.75C2.25 3.369 3.369 2.25 4.75 2.25C6.131 2.25 7.25 3.369 7.25 4.75Z"
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

export default YogaMat;
