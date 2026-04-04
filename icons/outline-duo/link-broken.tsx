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
          d="M14.6892 9.66862L12.5298 7.5092C11.1486 6.12805 8.90935 6.12805 7.5282 7.5092C6.14704 8.89036 6.14704 11.1296 7.5282 12.5108L9.68761 14.6702C11.0688 16.0514 13.3081 16.0514 14.6892 14.6702C16.0704 13.2891 16.0704 11.0498 14.6892 9.66862Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.251 3.75L13.001 1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.251 5.75L16.501 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75101 12.25L1.50101 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75101 14.25L5.00101 16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.3691 6.8934C8.0665 7.0539 7.78241 7.2617 7.52801 7.517C6.14701 8.898 6.137 11.146 7.518 12.527L9.69299 14.702C11.074 16.083 13.312 16.083 14.693 14.702C16.074 13.321 16.084 11.073 14.703 9.69201L13.9406 8.9296"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.63292 11.1066C9.93552 10.9461 10.2196 10.7383 10.474 10.483C11.855 9.10199 11.865 6.85399 10.484 5.47299L8.309 3.29799C6.928 1.91699 4.68003 1.92699 3.29903 3.30799C1.91803 4.68899 1.91803 6.92699 3.29903 8.30799L4.06142 9.07039"
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
