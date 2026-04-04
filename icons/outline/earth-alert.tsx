import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EarthAlert({
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
          d="M13.0008 2.98069L11.4893 2.9094C10.4948 2.8625 9.73551 3.7861 9.97371 4.7527L10.2457 5.8562C10.3051 6.0973 10.2086 6.3499 10.0036 6.4899C9.83801 6.603 9.62661 6.6251 9.44121 6.5487L8.51411 6.1666C7.78921 5.8678 6.96161 5.9623 6.32271 6.4169C5.75691 6.8194 5.40531 7.4578 5.36751 8.1511L5.29651 9.4532"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.59171 5.7457C3.02041 6.8697 3.97031 8.6883 5.49661 9.6832C5.92251 9.9178 6.90031 10.6811 6.83231 11.8894C6.80311 12.4071 6.85681 12.7572 6.96881 13.0122"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75409 9.84741C6.64979 9.65851 7.71089 9.34091 8.91519 9.96631"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.2972 15.7294C3.6318 14.6579 1.75 12.0487 1.75 9C1.75 4.9959 4.9959 1.75 9 1.75C12.5929 1.75 15.5754 4.3635 16.15 7.7931"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.25H16.183C16.9711 16.25 17.4495 15.3808 17.0278 14.7149L14.0948 10.0839C13.7022 9.464 12.7978 9.464 12.4052 10.0839L9.4722 14.7149C9.0505 15.3807 9.5289 16.25 10.317 16.25H10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.75V14.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.5C13.6642 17.5 14 17.1642 14 16.75C14 16.3358 13.6642 16 13.25 16C12.8358 16 12.5 16.3358 12.5 16.75C12.5 17.1642 12.8358 17.5 13.25 17.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default EarthAlert;
