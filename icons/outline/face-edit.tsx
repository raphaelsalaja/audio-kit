import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEdit({
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
          d="M11.25 10.758C10.778 11.504 9.946 12 9 12C8.054 12 7.222 11.504 6.75 10.758"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 9C6.552 9 7 8.5523 7 8C7 7.4477 6.552 7 6 7C5.448 7 5 7.4477 5 8C5 8.5523 5.448 9 6 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12 9C12.552 9 13 8.5523 13 8C13 7.4477 12.552 7 12 7C11.448 7 11 7.4477 11 8C11 8.5523 11.448 9 12 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.2471 8.0569C16.2479 8.0379 16.25 8.0193 16.25 8C16.25 3.9961 13.004 0.75 9 0.75C4.996 0.75 1.75 3.9961 1.75 8C1.75 11.8208 4.7104 14.9363 8.4601 15.2139"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
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

export default FaceEdit;
