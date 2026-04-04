import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsBoldOppositeDirection({
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
          d="M17.1 10.02L12.654 5.38001C12.297 5.01001 11.759 4.89401 11.285 5.08601C10.809 5.27701 10.502 5.732 10.502 6.245V8.00102H6.25C5.285 8.00102 4.5 8.78602 4.5 9.75102V12.251C4.5 13.216 5.285 14.001 6.25 14.001H10.5V15.757C10.5 16.27 10.808 16.725 11.283 16.916C11.435 16.978 11.595 17.007 11.752 17.007C12.085 17.007 12.411 16.873 12.653 16.621L17.098 11.981C17.625 11.431 17.625 10.57 17.098 10.02H17.1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.00003 10.1733V9.75089C3.00003 7.95888 4.45803 6.50089 6.25003 6.50089H9.00203V6.245C9.00203 5.3304 9.45063 4.50601 10.1754 3.99991H7.49923V2.2438C7.49923 1.7309 7.19123 1.2758 6.71623 1.0849C6.56423 1.0229 6.40423 0.993805 6.24723 0.993805C5.91423 0.993805 5.58823 1.12779 5.34623 1.37979L0.901231 6.0199C0.374231 6.5699 0.374231 7.4308 0.901231 7.9808H0.899231L3.00003 10.1733Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsBoldOppositeDirection;
