import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorOut({
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
          d="M13.75 16.5H7.25C6.2852 16.5 5.5 15.7148 5.5 14.75V3.25C5.5 2.2852 6.2852 1.5 7.25 1.5H13.75C14.7148 1.5 15.5 2.2852 15.5 3.25V14.75C15.5 15.7148 14.7148 16.5 13.75 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.99899 5.55711V12.4438C9.99899 13.0527 10.3076 13.6084 10.8261 13.9311L14.599 16.2705C15.1336 15.9707 15.4999 15.4053 15.4999 14.75V3.25001C15.4999 2.59521 15.1339 2.02981 14.5998 1.73001L10.8261 4.0694C10.3085 4.3907 9.99899 4.94671 9.99899 5.55711Z"
          fill={fill}
        />
        <path
          d="M2.561 9.75002H6.74999C7.16399 9.75002 7.49999 9.41402 7.49999 9.00002C7.49999 8.58602 7.16399 8.25002 6.74999 8.25002H2.561L4.031 6.78001C4.324 6.48701 4.324 6.01202 4.031 5.71902C3.738 5.42602 3.26299 5.42602 2.96999 5.71902L0.219994 8.47002C-0.0730059 8.76302 -0.0730059 9.23801 0.219994 9.53101L2.96999 12.281C3.11599 12.427 3.30799 12.501 3.49999 12.501C3.69199 12.501 3.88399 12.428 4.02999 12.281C4.32299 11.988 4.32299 11.513 4.02999 11.22L2.55999 9.75002H2.561Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorOut;
