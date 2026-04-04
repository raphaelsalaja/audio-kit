import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewBottom({
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
          d="M16.0001 4.75C16.0001 3.2334 14.7667 2 13.2501 2H9.00012H4.75012C3.23352 2 2.00012 3.2334 2.00012 4.75V9H9.00012H16.0001V4.75Z"
          fill={fill}
        />
        <path
          d="M4.25012 14.75C4.25012 13.5093 5.25942 12.5 6.50012 12.5H6.75012V12.25C6.75012 11.0093 7.75942 10 9.00012 10C10.2408 10 11.2501 11.0093 11.2501 12.25V12.5H11.5001C12.7408 12.5 13.7501 13.5093 13.7501 14.75C13.7501 15.2072 13.6114 15.6318 13.3761 15.9872C14.8331 15.9197 16.0001 14.7234 16.0001 13.25V9H9.00012H2.00012V13.25C2.00012 14.7234 3.16711 15.9197 4.62411 15.9872C4.38871 15.6318 4.25012 15.2072 4.25012 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75012 17.25V15.5H11.5001C11.9142 15.5 12.2501 15.1641 12.2501 14.75C12.2501 14.3359 11.9142 14 11.5001 14H9.75012V12.25C9.75012 11.8359 9.41422 11.5 9.00012 11.5C8.58602 11.5 8.25012 11.8359 8.25012 12.25V14H6.50012C6.08602 14 5.75012 14.3359 5.75012 14.75C5.75012 15.1641 6.08602 15.5 6.50012 15.5H8.25012V17.25C8.25012 17.6641 8.58602 18 9.00012 18C9.41422 18 9.75012 17.6641 9.75012 17.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowNewBottom;
