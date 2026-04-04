import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeLens({
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
          d="M8.99974 3.5C12.7875 3.5 15.0012 6.20533 15.9509 7.87793C16.3432 8.57061 16.3481 9.42041 15.9558 10.1133C15.006 11.7859 12.7874 14.5 8.99974 14.5C5.20568 14.4999 2.9917 11.7849 2.04467 10.1133C1.65227 9.42038 1.65227 8.57932 2.04467 7.88672C2.99166 6.21486 5.20567 3.50015 8.99974 3.5ZM8.99974 6.25C7.48108 6.25013 6.24974 7.4813 6.24974 9C6.24974 10.5187 7.48108 11.7499 8.99974 11.75C10.5185 11.75 11.7497 10.5188 11.7497 9C11.7497 7.48122 10.5185 6.25 8.99974 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.922 10.966L14.25 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.3206 11.092C15.5737 10.7468 15.786 10.413 15.9558 10.1132C16.3481 9.42031 16.3481 8.57931 15.9558 7.88661C15.0088 6.21471 12.7944 3.49991 9.00006 3.49991C5.20576 3.49991 2.99136 6.21471 2.04436 7.88661C1.65196 8.57921 1.65196 9.42031 2.04436 10.1132C2.99136 11.7848 5.20566 14.4999 9.00006 14.4999C9.39866 14.4999 9.77586 14.464 10.1399 14.4083"
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

export default EyeLens;
