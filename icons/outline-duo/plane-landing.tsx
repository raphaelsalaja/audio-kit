import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneLanding({
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
          d="M1.617 5.273L3.093 5.232C3.493 5.221 3.861 5.45 4.029 5.814L4.738 7.355L14.887 9.036C15.783 9.172 16.392 10.018 16.237 10.911C16.086 11.78 15.265 12.367 14.394 12.23L5.972 10.78C5.715 10.736 5.469 10.642 5.248 10.503L3.158 9.191C2.718 8.915 2.402 8.478 2.279 7.973L1.618 5.273H1.617Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 15.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.617 5.273L3.093 5.232C3.493 5.221 3.861 5.45 4.029 5.814L4.738 7.355L14.887 9.036C15.783 9.172 16.392 10.018 16.237 10.911C16.086 11.78 15.265 12.367 14.394 12.23L5.972 10.78C5.715 10.736 5.469 10.642 5.248 10.503L3.158 9.191C2.718 8.915 2.402 8.478 2.279 7.973L1.618 5.273H1.617Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.942 7.894L5.625 2.181L7.329 2.243C7.666 2.255 7.974 2.436 8.148 2.724L11.644 8.5"
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

export default PlaneLanding;
