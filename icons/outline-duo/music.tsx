import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Music({
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
          d="M6.586 3.361L13.586 2.194C14.196 2.092 14.75 2.562 14.75 3.18V5.75L5.75 7.25V4.347C5.75 3.858 6.103 3.441 6.586 3.361Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.75C4.85457 15.75 5.75 14.8546 5.75 13.75C5.75 12.6454 4.85457 11.75 3.75 11.75C2.64543 11.75 1.75 12.6454 1.75 13.75C1.75 14.8546 2.64543 15.75 3.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 14.25C13.8546 14.25 14.75 13.3546 14.75 12.25C14.75 11.1454 13.8546 10.25 12.75 10.25C11.6454 10.25 10.75 11.1454 10.75 12.25C10.75 13.3546 11.6454 14.25 12.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 7.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 5.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.586 3.361L13.586 2.194C14.196 2.092 14.75 2.562 14.75 3.18V5.75L5.75 7.25V4.347C5.75 3.858 6.103 3.441 6.586 3.361Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75C4.85457 15.75 5.75 14.8546 5.75 13.75C5.75 12.6454 4.85457 11.75 3.75 11.75C2.64543 11.75 1.75 12.6454 1.75 13.75C1.75 14.8546 2.64543 15.75 3.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 14.25C13.8546 14.25 14.75 13.3546 14.75 12.25C14.75 11.1454 13.8546 10.25 12.75 10.25C11.6454 10.25 10.75 11.1454 10.75 12.25C10.75 13.3546 11.6454 14.25 12.75 14.25Z"
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

export default Music;
