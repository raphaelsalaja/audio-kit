import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhonePlus({
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
          d="M14 2.25C14 1.83579 13.6642 1.5 13.25 1.5C12.8358 1.5 12.5 1.83579 12.5 2.25V4H10.75C10.3358 4 10 4.33579 10 4.75C10 5.16421 10.3358 5.5 10.75 5.5H12.5V7.25C12.5 7.66421 12.8358 8 13.25 8C13.6642 8 14 7.66421 14 7.25V5.5H15.75C16.1642 5.5 16.5 5.16421 16.5 4.75C16.5 4.33579 16.1642 4 15.75 4H14V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.3459 11.7544L12.4199 10.4554C11.7069 10.1384 10.8689 10.3414 10.3799 10.9494L9.14542 12.1382C7.83842 11.2842 6.72242 10.1672 5.86842 8.85823L7.07204 7.62887C7.68105 7.14087 7.88505 6.30187 7.56905 5.58887L6.26904 2.66087C5.92604 1.88887 5.08405 1.48287 4.26505 1.69387L2.29042 2.20823C1.44442 2.42823 0.897417 3.24823 1.01742 4.11523C1.95142 10.7642 7.24642 16.0602 13.8974 16.9942C13.9774 17.0052 14.0554 17.0102 14.1334 17.0102C14.9074 17.0102 15.6014 16.4882 15.8024 15.7202L16.3119 13.7564C16.5229 12.9394 16.1169 12.0974 15.3459 11.7544Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PhonePlus;
