import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudSnow({
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
          d="M14.157 6.326C12.633 5.724 10.7083 6 9.12499 7.3958C9.37499 6.125 11.4118 4.5058 13.523 4.608C12.61 3.047 10.922 2 9.02899 2C6.14399 2 3.79799 4.355 3.79799 7.25C3.79799 7.375 3.80299 7.5 3.81399 7.627C2.16899 8.045 0.96499 9.561 1.00199 11.334C1.02299 12.334 1.43099 13.265 2.14999 13.958C2.84999 14.632 3.76299 15 4.71499 15H12.516C14.989 15 17 12.982 17 10.499C16.997 8.64 15.869 7.003 14.157 6.326Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.75 11C9.16421 11 9.5 11.3358 9.5 11.75V12.9509L10.54 12.3505C10.8987 12.1434 11.3574 12.2663 11.5645 12.625C11.7716 12.9837 11.6487 13.4424 11.29 13.6495L10.25 14.25L11.29 14.8505C11.6487 15.0576 11.7716 15.5163 11.5645 15.875C11.3574 16.2337 10.8987 16.3566 10.54 16.1495L9.5 15.5491V16.75C9.5 17.1642 9.16421 17.5 8.75 17.5C8.33579 17.5 8 17.1642 8 16.75V15.5491L6.96 16.1495C6.60129 16.3566 6.14259 16.2337 5.93548 15.875C5.72837 15.5163 5.85127 15.0576 6.20999 14.8505L7.25003 14.25L6.20999 13.6495C5.85127 13.4424 5.72837 12.9837 5.93548 12.625C6.14259 12.2663 6.60129 12.1434 6.96 12.3505L8 12.9509V11.75C8 11.3358 8.33579 11 8.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CloudSnow;
