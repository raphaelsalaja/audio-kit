import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserRefresh({
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
          d="M9 7.25049C10.519 7.25049 11.75 6.01949 11.75 4.50049C11.75 2.98149 10.519 1.75049 9 1.75049C7.481 1.75049 6.25 2.98149 6.25 4.50049C6.25 6.01949 7.481 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 13.2505H16.25V10.7505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 15.8875C14.999 16.4185 14.288 16.7505 13.5 16.7505C11.981 16.7505 10.75 15.5195 10.75 14.0005C10.75 12.4815 11.981 11.2505 13.5 11.2505C14.666 11.2505 15.662 11.9765 16.063 13.0005"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.599 9.7883C9.4021 9.7658 9.2031 9.75049 9 9.75049C6.449 9.75049 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5157C5.2819 15.8446 6.6338 16.127 8.1918 16.2076"
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

export default UserRefresh;
