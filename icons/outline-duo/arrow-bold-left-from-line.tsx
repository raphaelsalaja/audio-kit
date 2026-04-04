import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftFromLine({
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
          d="M7.43899 4.14602L1.83299 8.60902C1.58199 8.80902 1.58199 9.19102 1.83299 9.39102L7.43799 13.854C7.76599 14.115 8.24899 13.882 8.24899 13.463V11.25H12.249C12.801 11.25 13.249 10.802 13.249 10.25V7.75002C13.249 7.19802 12.801 6.75002 12.249 6.75002H8.24899V4.53702C8.24899 4.11802 7.76599 3.88502 7.43899 4.14602Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.43899 4.14602L1.83299 8.60902C1.58199 8.80902 1.58199 9.19102 1.83299 9.39102L7.43799 13.854C7.76599 14.115 8.24899 13.882 8.24899 13.463V11.25H12.249C12.801 11.25 13.249 10.802 13.249 10.25V7.75002C13.249 7.19802 12.801 6.75002 12.249 6.75002H8.24899V4.53702C8.24899 4.11802 7.76599 3.88502 7.43899 4.14602Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.75V11.25"
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

export default ArrowBoldLeftFromLine;
