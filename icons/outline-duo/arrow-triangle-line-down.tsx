import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineDown({
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
          d="M9 10.25V2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.41402 15.547L12.472 11.031C12.697 10.699 12.459 10.251 12.058 10.251H5.94202C5.54102 10.251 5.30302 10.699 5.52802 11.031L8.58602 15.547C8.78402 15.84 9.21602 15.84 9.41402 15.547Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.41402 15.547L12.472 11.031C12.697 10.699 12.459 10.251 12.058 10.251H5.94202C5.54102 10.251 5.30302 10.699 5.52802 11.031L8.58602 15.547C8.78402 15.84 9.21602 15.84 9.41402 15.547Z"
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

export default ArrowTriangleLineDown;
