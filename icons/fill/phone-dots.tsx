import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneDots({
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
          d="M15.3459 11.7544L12.4199 10.4554C11.7069 10.1384 10.8689 10.3414 10.3799 10.9494L9.14542 12.1382C7.83842 11.2842 6.72242 10.1672 5.86842 8.85823L7.07204 7.62887C7.68105 7.14087 7.88505 6.30187 7.56905 5.58887L6.26904 2.66087C5.92604 1.88887 5.08405 1.48287 4.26505 1.69387L2.29042 2.20823C1.44442 2.42823 0.897417 3.24823 1.01742 4.11523C1.95142 10.7642 7.24642 16.0602 13.8974 16.9942C13.9774 17.0052 14.0554 17.0102 14.1334 17.0102C14.9074 17.0102 15.6014 16.4882 15.8024 15.7202L16.3119 13.7564C16.5229 12.9394 16.1169 12.0974 15.3459 11.7544Z"
          fill={fill}
        />
        <path
          d="M13 5C12.449 5 12 4.551 12 4C12 3.449 12.449 3 13 3C13.551 3 14 3.449 14 4C14 4.551 13.551 5 13 5Z"
          fill={secondaryfill}
        />
        <path
          d="M10 5C9.449 5 9 4.551 9 4C9 3.449 9.449 3 10 3C10.551 3 11 3.449 11 4C11 4.551 10.551 5 10 5Z"
          fill={secondaryfill}
        />
        <path
          d="M16 5C15.449 5 15 4.551 15 4C15 3.449 15.449 3 16 3C16.551 3 17 3.449 17 4C17 4.551 16.551 5 16 5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PhoneDots;
