import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones2({
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
          d="M2.75 9.75V14.25C2.75 14.802 3.198 15.25 3.75 15.25H5.25C5.802 15.25 6.25 14.802 6.25 14.25V10.75C6.25 10.198 5.802 9.75 5.25 9.75H3.703H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9.75V14.25C15.25 14.802 14.802 15.25 14.25 15.25H12.75C12.198 15.25 11.75 14.802 11.75 14.25V10.75C11.75 10.198 12.198 9.75 12.75 9.75H14.297H15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 9.75V9C15.25 5.548 12.452 2.75 9 2.75C5.548 2.75 2.75 5.548 2.75 9V9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 9.75V14.25C2.75 14.802 3.198 15.25 3.75 15.25H5.25C5.802 15.25 6.25 14.802 6.25 14.25V10.75C6.25 10.198 5.802 9.75 5.25 9.75H3.703H2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.75V14.25C15.25 14.802 14.802 15.25 14.25 15.25H12.75C12.198 15.25 11.75 14.802 11.75 14.25V10.75C11.75 10.198 12.198 9.75 12.75 9.75H14.297H15.25Z"
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

export default Headphones2;
