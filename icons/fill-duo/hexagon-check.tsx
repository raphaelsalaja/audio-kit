import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonCheck({
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
          d="M14.6295 4.14792L10.379 1.68313C9.52839 1.18993 8.47129 1.18993 7.61969 1.68313L3.37069 4.14792C2.52549 4.63812 2.00009 5.54982 2.00009 6.52682V11.4731C2.00009 12.4502 2.52549 13.3618 3.37069 13.852L7.62119 16.3168C8.04649 16.5634 8.52349 16.6864 9.00059 16.6864C9.47769 16.6864 9.95469 16.5634 10.3805 16.3168L14.6305 13.852C15.4767 13.3613 16.0016 12.4492 16.0001 11.4721V6.52682C16.0001 5.54972 15.4747 4.63812 14.6295 4.14792Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.00011 12.5C7.78771 12.5 7.58511 12.4102 7.44251 12.252L5.19251 9.752C4.91561 9.4439 4.94051 8.96977 5.24821 8.69237C5.55681 8.41647 6.03041 8.44039 6.30781 8.74809L7.95621 10.5801L11.6569 5.79149C11.9093 5.46339 12.3825 5.40376 12.7087 5.65666C13.0363 5.90956 13.0969 6.38078 12.8435 6.70848L8.59351 12.2085C8.45781 12.3848 8.25071 12.4912 8.02861 12.4995C8.01881 12.5 8.00941 12.5 8.00011 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HexagonCheck;
