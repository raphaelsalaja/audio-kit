import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseAlert({
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
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.98071V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H6.3231"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.25H16.183C16.9711 16.25 17.4495 15.3808 17.0278 14.7149L14.0948 10.0839C13.7022 9.46404 12.7978 9.46404 12.4052 10.0839L9.4722 14.7149C9.0505 15.3807 9.5289 16.25 10.317 16.25H10.75"
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

export default SuitcaseAlert;
