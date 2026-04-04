import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineLeft({
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
          d="M15.75 9.75H7.75C7.336 9.75 7 9.414 7 9C7 8.586 7.336 8.25 7.75 8.25H15.75C16.164 8.25 16.5 8.586 16.5 9C16.5 9.414 16.164 9.75 15.75 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.83601 4.83801C7.42601 4.62101 6.93301 4.64601 6.54901 4.90701L2.03301 7.96499C1.68901 8.19799 1.48401 8.585 1.48401 9C1.48401 9.415 1.69001 9.802 2.03301 10.035L6.55001 13.093C6.76101 13.236 7.00601 13.308 7.25001 13.308C7.45101 13.308 7.65201 13.259 7.83601 13.162C8.24601 12.945 8.50001 12.521 8.50001 12.058V5.94198C8.50001 5.47898 8.24601 5.05501 7.83601 4.83801Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineLeft;
