import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Blueprint({
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
          d="M13.75 15H15.25C15.802 15 16.25 14.552 16.25 14V8.75C16.25 8.198 15.802 7.75 15.25 7.75H14.25V3.75C14.25 3.198 13.802 2.75 13.25 2.75H2.75C2.198 2.75 1.75 3.198 1.75 3.75V14C1.75 14.552 2.198 15 2.75 15H10.25"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 7.75H8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 3.25V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14.75V13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 7.75H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 14.75H15.25C15.802 14.75 16.25 14.302 16.25 13.75V8.75C16.25 8.198 15.802 7.75 15.25 7.75H14.25V4.25C14.25 3.698 13.802 3.25 13.25 3.25H2.75C2.198 3.25 1.75 3.698 1.75 4.25V13.75C1.75 14.302 2.198 14.75 2.75 14.75H10.25"
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

export default Blueprint;
