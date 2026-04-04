import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneCheck({
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
          d="M16.4519 1.40142C16.7825 1.65098 16.8481 2.12129 16.5986 2.45188L13.2016 6.95188C13.0736 7.12143 12.8797 7.22874 12.6681 7.24718C12.4565 7.26562 12.2469 7.19345 12.0916 7.0486L10.4826 5.5486C10.1796 5.26615 10.163 4.79156 10.4454 4.48859C10.7279 4.18561 11.2024 4.16897 11.5054 4.45143L12.5058 5.384L15.4014 1.54814C15.651 1.21755 16.1213 1.15186 16.4519 1.40142Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhoneCheck;
