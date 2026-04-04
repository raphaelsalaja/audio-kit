import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BucketPaint2({
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
          d="M9 1.5C5.521 1.5 2 2.53 2 4.5C2 4.594 2.039 4.851 2.041 4.861L3.25 13.95C3.25 15.702 6.23 16.5 9 16.5C11.77 16.5 14.75 15.702 14.75 13.95L15.959 4.861C15.961 4.851 16 4.594 16 4.5C16 2.53 12.479 1.5 9 1.5ZM14.491 4.52C14.457 4.827 13.527 5.407 11.805 5.741C11.339 5.831 11 6.244 11 6.719V10.001C11 10.553 10.552 11.001 10 11.001C9.448 11.001 9 10.553 9 10.001V6.971C9 6.443 8.585 6.005 8.058 5.976C5.133 5.814 3.553 4.925 3.509 4.521L3.505 4.49C3.533 4.049 5.453 3.001 9 3.001C12.547 3.001 14.467 4.049 14.495 4.49L14.491 4.52Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.491 4.52001C14.457 4.82701 13.527 5.40701 11.805 5.74101C11.339 5.83101 11 6.24401 11 6.71901V10.001C11 10.553 10.552 11.001 10 11.001C9.448 11.001 9 10.553 9 10.001V6.97101C9 6.44301 8.585 6.00501 8.058 5.97601C5.133 5.81401 3.553 4.92501 3.509 4.52101L3.505 4.49001C3.533 4.04901 5.453 3.00101 9 3.00101C12.547 3.00101 14.467 4.04901 14.495 4.49001L14.491 4.52001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BucketPaint2;
