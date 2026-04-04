import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut2({
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
          d="M14.6295 4.14792L10.379 1.68313C9.52839 1.18993 8.47129 1.18993 7.61969 1.68313L3.37069 4.14792C2.52549 4.63812 2.00009 5.54982 2.00009 6.52682V11.4731C2.00009 12.4502 2.52549 13.3618 3.37069 13.852L7.62119 16.3168C8.04649 16.5634 8.5235 16.6864 9.0006 16.6864C9.4777 16.6864 9.95469 16.5634 10.3805 16.3168L14.6305 13.852C15.4767 13.3613 16.0016 12.4492 16.0001 11.4721V6.52682C16.0001 5.54972 15.4747 4.63812 14.6295 4.14792Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 12C10.6569 12 12.0001 10.6569 12.0001 9C12.0001 7.34315 10.6569 6 9.00009 6C7.34324 6 6.00009 7.34315 6.00009 9C6.00009 10.6569 7.34324 12 9.00009 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Nut2;
