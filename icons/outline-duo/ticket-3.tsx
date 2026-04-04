import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket3({
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
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.776 7.994C11.717 7.813 11.561 7.681 11.372 7.654L10.043 7.461L9.44802 6.257C9.28002 5.915 8.71902 5.915 8.55202 6.257L7.95702 7.461L6.62802 7.654C6.44002 7.681 6.28302 7.813 6.22402 7.994C6.16502 8.175 6.21402 8.373 6.35002 8.506L7.31202 9.444L7.08502 10.768C7.05302 10.956 7.13002 11.145 7.28402 11.257C7.43902 11.37 7.64302 11.384 7.81102 11.295L8.99902 10.67L10.187 11.295C10.26 11.334 10.34 11.353 10.42 11.353C10.524 11.353 10.627 11.321 10.714 11.257C10.868 11.145 10.945 10.956 10.913 10.768L10.686 9.444L11.648 8.506C11.784 8.373 11.833 8.174 11.774 7.994H11.776Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Ticket3;
