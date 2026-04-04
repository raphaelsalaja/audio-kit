import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BooleanSubtract({
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
          d="M14.25 6.75H11.25V11.25H6.75V14.25C6.75 14.802 7.198 15.25 7.75 15.25H14.25C14.802 15.25 15.25 14.802 15.25 14.25V7.75C15.25 7.198 14.802 6.75 14.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 6.75H14.25C14.802 6.75 15.25 7.198 15.25 7.75V14.25C15.25 14.802 14.802 15.25 14.25 15.25H7.75C7.198 15.25 6.75 14.802 6.75 14.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 2.75H3.75C3.198 2.75 2.75 3.198 2.75 3.75V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 2.75H10.25C10.802 2.75 11.25 3.198 11.25 3.75V5V9V10.25C11.25 10.802 10.802 11.25 10.25 11.25H9.25H4.75H3.75C3.198 11.25 2.75 10.802 2.75 10.25V8.75"
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

export default BooleanSubtract;
