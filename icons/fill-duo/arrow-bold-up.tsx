import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUp({
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
          d="M9.99602 1.41302C9.51702 0.785016 8.48202 0.785016 8.00402 1.41302L3.01102 7.99402C2.72202 8.37402 2.67501 8.87702 2.88701 9.30502C3.10001 9.73402 3.52902 10 4.00702 10H6.00002V15.25C6.00002 16.215 6.78502 17 7.75002 17H10.25C11.215 17 12 16.215 12 15.25V10H13.993C14.472 10 14.9 9.73402 15.113 9.30502C15.325 8.87702 15.278 8.37402 14.989 7.99402L9.99602 1.41302Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldUp;
