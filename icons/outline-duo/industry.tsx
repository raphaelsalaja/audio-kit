import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Industry({
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
          d="M3.43101 4.75H4.06901C4.59401 4.75 5.02901 5.15499 5.06601 5.67899L5.673 14.179C5.714 14.758 5.25601 15.25 4.67601 15.25H2.824C2.244 15.25 1.78501 14.758 1.82701 14.179L2.434 5.67899C2.471 5.15599 2.90701 4.75 3.43101 4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.43101 4.75H4.06901C4.59401 4.75 5.02901 5.15499 5.06601 5.67899L5.673 14.179C5.714 14.758 5.25601 15.25 4.67601 15.25H2.824C2.244 15.25 1.78501 14.758 1.82701 14.179L2.434 5.67899C2.471 5.15599 2.90701 4.75 3.43101 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 2.59799C4.306 2.08999 4.863 1.75 5.5 1.75H7.25C7.946 1.75 8.548 1.343 8.829 0.753998"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.26032 8.29431L11.25 5.75V10L16.25 5.75V14.25C16.25 14.802 15.802 15.25 15.25 15.25H4.67603"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 12H9.25"
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

export default Industry;
