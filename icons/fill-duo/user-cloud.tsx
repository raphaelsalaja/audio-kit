import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCloud({
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
          d="M11.3471 13.0041C11.9051 11.8241 13.099 10.9995 14.5 10.9995C16.433 10.9995 18 12.5666 18 14.4995C18 16.4324 16.433 17.9995 14.5 17.9995H11.5C10.1193 17.9995 9 16.8802 9 15.4995C9 14.1702 10.0376 13.0831 11.3471 13.0041Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.99993 9C6.14161 9 3.69052 10.7157 2.60511 13.1674C2.05155 14.4186 2.74419 15.8317 4.01253 16.2313C5.02461 16.5502 6.2954 16.8445 7.77277 16.9544C7.59662 16.5035 7.49993 16.0128 7.49993 15.4995C7.49993 13.6712 8.7259 12.1301 10.4013 11.6525C10.9185 10.9054 11.6352 10.3026 12.4788 9.92684C11.455 9.33743 10.2675 9 8.99993 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserCloud;
