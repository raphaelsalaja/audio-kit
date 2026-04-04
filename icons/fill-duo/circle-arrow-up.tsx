import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowUp({
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
          d="M9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.97001 7.71997L8.47001 5.21997C8.61601 5.07397 8.80801 5 9.00001 5C9.19201 5 9.38401 5.07297 9.53001 5.21997L12.03 7.71997C12.323 8.01297 12.323 8.48801 12.03 8.78101C11.737 9.07401 11.262 9.07401 10.969 8.78101L9.74901 7.56097V12.25C9.74901 12.664 9.41301 13 8.99901 13C8.58501 13 8.24901 12.664 8.24901 12.25V7.56097L7.02901 8.78101C6.73601 9.07401 6.26101 9.07401 5.96801 8.78101C5.67501 8.48801 5.67501 8.01297 5.96801 7.71997H5.97001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowUp;
