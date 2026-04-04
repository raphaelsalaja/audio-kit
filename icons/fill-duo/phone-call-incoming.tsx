import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneCallIncoming({
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
          d="M15.7803 3.28033C16.0732 2.98744 16.0732 2.51256 15.7803 2.21967C15.4874 1.92678 15.0126 1.92678 14.7197 2.21967L11.5 5.43934V3.75C11.5 3.33579 11.1642 3 10.75 3C10.3358 3 10 3.33579 10 3.75V7.25C10 7.66421 10.3358 8 10.75 8H14.25C14.6642 8 15 7.66421 15 7.25C15 6.83579 14.6642 6.5 14.25 6.5H12.5607L15.7803 3.28033Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhoneCallIncoming;
