import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link({
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
          d="M8.36909 6.8934C8.06649 7.0539 7.78239 7.2617 7.52799 7.517L7.51799 7.527C6.13699 8.908 6.13699 11.146 7.51799 12.527L9.69299 14.702C11.074 16.083 13.312 16.083 14.693 14.702L14.703 14.692C16.084 13.311 16.084 11.073 14.703 9.692L13.9406 8.9296"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.63289 11.1066C9.93549 10.9461 10.2196 10.7383 10.474 10.483L10.484 10.473C11.865 9.09199 11.865 6.85399 10.484 5.47299L8.30899 3.29799C6.92799 1.91699 4.68999 1.91699 3.30899 3.29799L3.29899 3.30799C1.91799 4.68899 1.91799 6.92699 3.29899 8.30799L4.06139 9.07039"
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

export default Link;
