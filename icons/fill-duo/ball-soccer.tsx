import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallSoccer({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1C10.0732 1 11.097 1.21131 12.0321 1.59461C11.2722 2.26478 10.5108 2.9323 9.75 3.60199V5.12793L12.4548 7.09385L13.9001 6.61997L15.0987 3.82232C16.2845 5.21772 17 7.0253 17 9C17 9.20401 16.9924 9.40623 16.9774 9.60641L14.3649 8.04616L12.9167 8.52096L11.8843 11.6296L12.7874 12.9254L15.8114 13.198C14.7225 14.9609 12.9683 16.2694 10.8991 16.7732L11.5679 13.7989L10.6625 12.5H7.33664L6.43333 13.797L7.11772 16.7773C5.04326 16.277 3.28396 14.9683 2.1919 13.2033L5.21197 12.926L6.11479 11.6297L5.08236 8.52109L3.63476 8.04693L1.0224 9.60317C1.00755 9.40405 1 9.20291 1 9C1 7.02898 1.7128 5.22446 2.89467 3.83014C3.2972 4.75985 3.69666 5.69003 4.09854 6.62043L5.54419 7.09395L8.25 5.12787V3.60117C7.49043 2.93012 6.7298 2.26509 5.97253 1.5927C6.9064 1.21062 7.92861 1 9 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallSoccer;
