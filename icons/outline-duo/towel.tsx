import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Towel({
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
          d="M13.5 2.75C12.534 2.75 11.75 3.534 11.75 4.5V11.25C11.75 11.802 11.302 12.25 10.75 12.25H3.75C3.198 12.25 2.75 11.802 2.75 11.25V4.5C2.75 3.534 3.534 2.75 4.5 2.75H13.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 14.75C4.75 15.302 5.198 15.75 5.75 15.75H14.25C14.802 15.75 15.25 15.302 15.25 14.75V4.5C15.25 3.534 14.466 2.75 13.5 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 2.75C12.534 2.75 11.75 3.534 11.75 4.5V11.25C11.75 11.802 11.302 12.25 10.75 12.25H3.75C3.198 12.25 2.75 11.802 2.75 11.25V4.5C2.75 3.534 3.534 2.75 4.5 2.75H13.5Z"
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

export default Towel;
