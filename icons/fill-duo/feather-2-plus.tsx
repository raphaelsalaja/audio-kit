import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather2Plus({
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
          d="M4 1C4 0.585786 3.66421 0.25 3.25 0.25C2.83579 0.25 2.5 0.585786 2.5 1V2.5H1C0.585786 2.5 0.25 2.83579 0.25 3.25C0.25 3.66421 0.585786 4 1 4H2.5V5.5C2.5 5.91421 2.83579 6.25 3.25 6.25C3.66421 6.25 4 5.91421 4 5.5V4H5.5C5.91421 4 6.25 3.66421 6.25 3.25C6.25 2.83579 5.91421 2.5 5.5 2.5H4V1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.8454 2.90669C15.0236 2.08439 13.9304 1.63129 12.7673 1.63129C11.6042 1.63129 10.511 2.08439 9.68924 2.90669L4.80494 7.7905C4.29274 8.3022 3.99924 9.01119 3.99924 9.73479V14.0029C3.99924 14.3357 4.21994 14.6086 4.52014 14.7065L8.46704 11.3457L6.95764 14.7529H9.01734C9.74094 14.7529 10.4499 14.4594 10.9616 13.9472L15.8454 9.0629C16.6677 8.2411 17.1208 7.14789 17.1208 5.98479C17.1208 4.82169 16.6677 3.72849 15.8454 2.90669Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.49923 17.0029C2.30733 17.0029 2.11543 16.9297 1.96893 16.7832C1.67593 16.4902 1.67593 16.0156 1.96893 15.7227L8.71893 8.97268C9.01193 8.67968 9.48653 8.67968 9.77943 8.97268C10.0723 9.26568 10.0724 9.74028 9.77943 10.0332L3.02943 16.7832C2.88293 16.9297 2.69113 17.0029 2.49923 17.0029Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Feather2Plus;
