import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneVolume({
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
          d="M9.5 1.75C9.5 1.33579 9.83579 1 10.25 1C13.9782 1 17 4.02179 17 7.75C17 8.16421 16.6642 8.5 16.25 8.5C15.8358 8.5 15.5 8.16421 15.5 7.75C15.5 4.85021 13.1498 2.5 10.25 2.5C9.83579 2.5 9.5 2.16421 9.5 1.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 4.75C9.5 4.33579 9.83579 4 10.25 4C12.3212 4 14 5.67879 14 7.75C14 8.16421 13.6642 8.5 13.25 8.5C12.8358 8.5 12.5 8.16421 12.5 7.75C12.5 6.50721 11.4928 5.5 10.25 5.5C9.83579 5.5 9.5 5.16421 9.5 4.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M15.3459 11.7544L12.4199 10.4554C11.7069 10.1384 10.8689 10.3414 10.3799 10.9494L9.14542 12.1382C7.83842 11.2842 6.72242 10.1672 5.86842 8.85823L7.07204 7.62887C7.68105 7.14087 7.88505 6.30187 7.56905 5.58887L6.26904 2.66087C5.92604 1.88887 5.08405 1.48287 4.26505 1.69387L2.29042 2.20823C1.44442 2.42823 0.897417 3.24823 1.01742 4.11523C1.95142 10.7642 7.24642 16.0602 13.8974 16.9942C13.9774 17.0052 14.0554 17.0102 14.1334 17.0102C14.9074 17.0102 15.6014 16.4882 15.8024 15.7202L16.3119 13.7564C16.5229 12.9394 16.1169 12.0974 15.3459 11.7544Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneVolume;
