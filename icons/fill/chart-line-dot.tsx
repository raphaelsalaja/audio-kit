import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartLineDot({
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
          d="M15.3448 5.15519C16.7259 5.15519 17.8448 4.03585 17.8448 2.65519C17.8448 1.27452 16.7259 0.155187 15.3448 0.155187C13.9637 0.155187 12.8448 1.27452 12.8448 2.65519C12.8448 4.03585 13.9637 5.15519 15.3448 5.15519Z"
          fill={secondaryfill}
        />
        <path
          d="M11.3982 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V6.60181C15.7868 6.63692 15.568 6.65519 15.3448 6.65519C13.1351 6.65519 11.3448 4.86411 11.3448 2.65519C11.3448 2.43206 11.3631 2.21319 11.3982 2ZM11.134 10.426L13.28 8.28H13.281C13.574 7.987 13.574 7.512 13.281 7.219C12.988 6.926 12.513 6.926 12.22 7.219L10.25 9.189L8.634 7.573C8.146 7.086 7.353 7.086 6.866 7.573L4.72 9.719C4.427 10.012 4.427 10.487 4.72 10.78C4.866 10.927 5.058 11 5.25 11C5.442 11 5.634 10.926 5.78 10.78L7.75 8.81L9.366 10.426C9.854 10.913 10.647 10.913 11.134 10.426Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartLineDot;
