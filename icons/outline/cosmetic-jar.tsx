import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CosmeticJar({
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
          d="M1.75 11.5C1.75 12.743 4.101 13.75 7 13.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 11.25C9.899 11.25 12.25 10.2426 12.25 9C12.25 7.7574 9.899 6.75 7 6.75C4.101 6.75 1.75 7.7574 1.75 9C1.75 10.2426 4.101 11.25 7 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2501 10.0751C15.8781 9.2111 16.25 8.1503 16.25 7C16.25 4.101 13.899 1.75 11 1.75C9.33113 1.75 7.85583 2.5358 6.89673 3.7503"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CosmeticJar;
