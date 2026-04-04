import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Belt({
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
          d="M10.75 5.25H7.25C6.69772 5.25 6.25 5.69772 6.25 6.25V11.75C6.25 12.3023 6.69772 12.75 7.25 12.75H10.75C11.3023 12.75 11.75 12.3023 11.75 11.75V6.25C11.75 5.69772 11.3023 5.25 10.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 11.25H1.75C1.198 11.25 0.75 10.802 0.75 10.25V7.75C0.75 7.198 1.198 6.75 1.75 6.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 6.75H16.25C16.802 6.75 17.25 7.198 17.25 7.75V10.25C17.25 10.802 16.802 11.25 16.25 11.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 5.25H7.25C6.69772 5.25 6.25 5.69772 6.25 6.25V11.75C6.25 12.3023 6.69772 12.75 7.25 12.75H10.75C11.3023 12.75 11.75 12.3023 11.75 11.75V6.25C11.75 5.69772 11.3023 5.25 10.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 9H11.75"
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

export default Belt;
