import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal2({
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
          d="M5.125 5.125L7.25 7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.875 12.875L10.75 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 6.896V3C2.75 2.862 2.862 2.75 3 2.75H6.896C7.119 2.75 7.23 3.019 7.073 3.177L3.177 7.073C3.02 7.23 2.75 7.119 2.75 6.896Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 6.896V3C2.75 2.862 2.862 2.75 3 2.75H6.896C7.119 2.75 7.23 3.019 7.073 3.177L3.177 7.073C3.02 7.23 2.75 7.119 2.75 6.896Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.104 15.25H15C15.138 15.25 15.25 15.138 15.25 15V11.104C15.25 10.881 14.981 10.77 14.823 10.927L10.927 14.823C10.77 14.98 10.881 15.25 11.104 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.104 15.25H15C15.138 15.25 15.25 15.138 15.25 15V11.104C15.25 10.881 14.981 10.77 14.823 10.927L10.927 14.823C10.77 14.98 10.881 15.25 11.104 15.25Z"
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

export default ArrowTriangleLineExpandDiagonal2;
