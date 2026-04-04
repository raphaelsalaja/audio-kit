import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareActivityChart({
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
          d="M6.8196 6.61079C7.0021 6.24559 7.5205 6.2385 7.713 6.5986L10.2769 11.3943C10.4691 11.7539 10.9869 11.7471 11.1698 11.3828L12.5156 8.70309H15.25V4.75C15.25 3.645 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V9.25H5.5L6.8196 6.61079Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 8.75H12.809C12.6196 8.75 12.4465 8.857 12.3618 9.0264L11.1808 11.3885C10.9996 11.7508 10.4854 11.7586 10.2934 11.4019L7.70673 6.5981C7.51473 6.2414 7.00042 6.2492 6.81932 6.6115L5.63832 8.9736C5.55362 9.143 5.38052 9.25 5.19112 9.25H2.75012"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.75C15.25 3.645 14.355 2.75 13.25 2.75H4.75C3.645 2.75 2.75 3.645 2.75 4.75V13.25C2.75 14.355 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.355 15.25 13.25V4.75Z"
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

export default SquareActivityChart;
