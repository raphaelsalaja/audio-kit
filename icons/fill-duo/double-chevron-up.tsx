import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoubleChevronUp({
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
          d="M9.52999 8.21999C9.23699 7.92699 8.76199 7.92699 8.46899 8.21999L4.21899 12.47C3.92599 12.763 3.92599 13.238 4.21899 13.531C4.51199 13.824 4.98699 13.824 5.27999 13.531L8.99999 9.811L12.72 13.531C12.866 13.677 13.058 13.751 13.25 13.751C13.442 13.751 13.634 13.678 13.78 13.531C14.073 13.238 14.073 12.763 13.78 12.47L9.52999 8.21999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.52999 3.46999C9.23699 3.17699 8.76199 3.17699 8.46899 3.46999L4.21999 7.71999C3.92699 8.01299 3.92699 8.48803 4.21999 8.78103C4.51299 9.07403 4.988 9.07403 5.281 8.78103L9.001 5.061L12.721 8.78103C12.867 8.92703 13.059 9.001 13.251 9.001C13.443 9.001 13.635 8.92803 13.781 8.78103C14.074 8.48803 14.074 8.01299 13.781 7.71999L9.52999 3.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DoubleChevronUp;
