import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewLeft({
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
          d="M13.2501 16C14.7667 16 16.0001 14.7666 16.0001 13.25V9V4.75C16.0001 3.2334 14.7667 2 13.2501 2H9.00012V9V16H13.2501Z"
          fill={fill}
        />
        <path
          d="M3.25012 4.25C4.49082 4.25 5.50012 5.2593 5.50012 6.5V6.75H5.75012C6.99082 6.75 8.00012 7.7593 8.00012 9C8.00012 10.2407 6.99082 11.25 5.75012 11.25H5.50012V11.5C5.50012 12.7407 4.49082 13.75 3.25012 13.75C2.79292 13.75 2.36834 13.6113 2.01294 13.376C2.08044 14.833 3.27672 16 4.75012 16H9.00012V9V2H4.75012C3.27672 2 2.08044 3.16702 2.01294 4.62402C2.36834 4.38862 2.79292 4.25 3.25012 4.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M0.750122 9.75H2.50012V11.5C2.50012 11.9141 2.83602 12.25 3.25012 12.25C3.66422 12.25 4.00012 11.9141 4.00012 11.5V9.75H5.75012C6.16422 9.75 6.50012 9.4141 6.50012 9C6.50012 8.5859 6.16422 8.25 5.75012 8.25H4.00012V6.5C4.00012 6.0859 3.66422 5.75 3.25012 5.75C2.83602 5.75 2.50012 6.0859 2.50012 6.5V8.25H0.750122C0.336022 8.25 0.00012207 8.5859 0.00012207 9C0.00012207 9.4141 0.336022 9.75 0.750122 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColNewLeft;
