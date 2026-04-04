import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressIndicator({
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
          d="M1.75 11.25C1.75 10.6977 2.19772 10.25 2.75 10.25H9V15.25H2.75C2.19772 15.25 1.75 14.8023 1.75 14.25V11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.25V15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.25H2.75C2.19772 10.25 1.75 10.6977 1.75 11.25V14.25C1.75 14.8023 2.19772 15.25 2.75 15.25H15.25C15.8023 15.25 16.25 14.8023 16.25 14.25V11.25C16.25 10.6977 15.8023 10.25 15.25 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.48497 6.975L11.455 3.598C11.673 3.224 11.403 2.754 10.97 2.754H7.02997C6.59697 2.754 6.32697 3.224 6.54497 3.598L8.51497 6.975C8.73197 7.346 9.26797 7.346 9.48497 6.975Z"
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

export default ProgressIndicator;
