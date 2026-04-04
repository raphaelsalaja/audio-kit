import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsConverge({
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
          d="M1.75 6.25C1.75 5.14543 2.64543 4.25 3.75 4.25H14.25C15.3546 4.25 16.25 5.14543 16.25 6.25V12C16.25 13.1046 15.3546 14 14.25 14H3.75C2.64543 14 1.75 13.1046 1.75 12V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.508 13.75H3.75C2.645 13.75 1.75 12.855 1.75 11.75V6.25C1.75 5.145 2.645 4.25 3.75 4.25H14.25C15.355 4.25 16.25 5.145 16.25 6.25V11.75C16.25 12.855 15.355 13.75 14.25 13.75H10.508"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 11.5L10.508 13.742L12.75 15.985"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.26501 11.5L7.50801 13.742L5.26501 15.985"
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

export default ArrowsConverge;
