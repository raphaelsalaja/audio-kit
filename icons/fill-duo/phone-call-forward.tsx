import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneCallForward({
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
          d="M15.3459 11.7544L12.4199 10.4554C11.7069 10.1384 10.8689 10.3414 10.3799 10.9494L9.14542 12.1382C7.83842 11.2842 6.72242 10.1672 5.86842 8.85822L7.07204 7.62886C7.68105 7.14086 7.88505 6.30186 7.56905 5.58886L6.26904 2.66086C5.92604 1.88886 5.08405 1.48286 4.26505 1.69386L2.29042 2.20822C1.44442 2.42822 0.897417 3.24822 1.01742 4.11522C1.95142 10.7642 7.24642 16.0602 13.8974 16.9942C13.9774 17.0052 14.0554 17.0102 14.1334 17.0102C14.9074 17.0102 15.6014 16.4882 15.8024 15.7202L16.3119 13.7564C16.5229 12.9394 16.1169 12.0974 15.3459 11.7544Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2803 2.21967C13.9874 1.92678 13.5126 1.92678 13.2197 2.21967C12.9268 2.51256 12.9268 2.98744 13.2197 3.28033L14.4393 4.5H10.75C10.3358 4.5 10 4.83579 10 5.25C10 5.66421 10.3358 6 10.75 6H14.4393L13.2197 7.21967C12.9268 7.51256 12.9268 7.98744 13.2197 8.28033C13.5126 8.57322 13.9874 8.57322 14.2803 8.28033L16.7803 5.78033C17.0732 5.48744 17.0732 5.01256 16.7803 4.71967L14.2803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhoneCallForward;
