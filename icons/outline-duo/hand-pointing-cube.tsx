import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandPointingCube({
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
          d="M4.52068 9.04939V4.88353L8.08891 2.82867C7.98569 2.65017 7.8365 2.49821 7.652 2.391L5.102 0.912C4.73 0.696 4.27 0.696 3.898 0.912L1.348 2.391C0.978 2.606 0.75 3.001 0.75 3.429V6.397C0.75 6.825 0.978 7.22 1.348 7.435L3.898 8.914C4.084 9.022 4.292 9.076 4.5 9.076L4.52068 9.04939Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25 4.25V3.429C8.25 3.001 8.022 2.606 7.652 2.391L5.102 0.912C4.73 0.696 4.27 0.696 3.898 0.912L1.348 2.391C0.978 2.606 0.75 3.001 0.75 3.429V6.397C0.75 6.825 0.978 7.22 1.348 7.435L3.898 8.914C4.084 9.022 4.292 9.076 4.5 9.076"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.09 2.83099L4.5 4.91299L0.910004 2.83099"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 9.07599V4.91299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 15.225C17.25 13.166 17.014 11.586 16.25 11.002C15.375 10.333 13.098 10.164 10.955 10.77L9.62501 7.943C9.33201 7.317 8.58801 7.047 7.96201 7.34C7.33701 7.632 7.06601 8.376 7.35801 9.001L9.91901 14.457L7.19501 13.956C6.60801 13.848 6.02801 14.18 5.82401 14.741C5.59201 15.378 5.92201 16.081 6.56001 16.31L9.17601 17.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HandPointingCube;
