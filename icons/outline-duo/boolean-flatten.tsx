import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanFlatten({
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
          d="M3.043 3.043C2.862 3.224 2.75 3.474 2.75 3.75V10.25C2.75 10.802 3.198 11.25 3.75 11.25H6.75V14.25C6.75 14.802 7.198 15.25 7.75 15.25H14.25C14.526 15.25 14.776 15.138 14.957 14.957L3.043 3.043Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.043 7.043C7.224 6.862 7.474 6.75 7.75 6.75H14.25C14.802 6.75 15.25 7.198 15.25 7.75V14.25C15.25 14.526 15.138 14.776 14.957 14.957"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.043 3.043C3.224 2.862 3.474 2.75 3.75 2.75H10.25C10.802 2.75 11.25 3.198 11.25 3.75V10.25C11.25 10.526 11.138 10.776 10.957 10.957"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.043 3.043C2.862 3.224 2.75 3.474 2.75 3.75V10.25C2.75 10.802 3.198 11.25 3.75 11.25H6.75V14.25C6.75 14.802 7.198 15.25 7.75 15.25H14.25C14.526 15.25 14.776 15.138 14.957 14.957L3.043 3.043Z"
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

export default BooleanFlatten;
