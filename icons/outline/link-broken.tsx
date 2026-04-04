import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LinkBroken({
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
          d="M12.251 3.75L13.001 1.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.251 5.75L16.501 5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75098 12.25L1.50098 13"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75098 14.25L5.00098 16.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.36915 6.8934C8.06655 7.0539 7.78246 7.2617 7.52806 7.517L7.51805 7.527C6.13705 8.908 6.13705 11.146 7.51805 12.527L9.69304 14.702C11.074 16.083 13.312 16.083 14.693 14.702L14.703 14.692C16.084 13.311 16.084 11.073 14.703 9.69201L13.9407 8.9296"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.63295 11.1066C9.93555 10.9461 10.2196 10.7383 10.474 10.483L10.4841 10.473C11.8651 9.09199 11.8651 6.85399 10.4841 5.47299L8.30903 3.29799C6.92803 1.91699 4.69003 1.91699 3.30903 3.29799L3.29906 3.30799C1.91806 4.68899 1.91806 6.92699 3.29906 8.30799L4.06145 9.07039"
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

export default LinkBroken;
