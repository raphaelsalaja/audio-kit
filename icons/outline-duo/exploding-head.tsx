import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExplodingHead({
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
          d="M16.25 10C16.25 14.004 13.004 17.25 9 17.25C4.996 17.25 1.75 14.004 1.75 10L3.144 10.697C3.51 10.88 3.95 10.822 4.256 10.55L5.423 9.513C5.763 9.211 6.264 9.176 6.642 9.428L8.445 10.63C8.781 10.854 9.219 10.854 9.554 10.63L11.357 9.428C11.735 9.176 12.236 9.211 12.576 9.513L13.743 10.55C14.049 10.822 14.489 10.88 14.855 10.697L16.25 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 10C16.25 14.004 13.004 17.25 9 17.25C4.996 17.25 1.75 14.004 1.75 10L3.144 10.697C3.51 10.88 3.95 10.822 4.256 10.55L5.423 9.513C5.763 9.211 6.264 9.176 6.642 9.428L8.445 10.63C8.781 10.854 9.219 10.854 9.554 10.63L11.357 9.428C11.735 9.176 12.236 9.211 12.576 9.513L13.743 10.55C14.049 10.822 14.489 10.88 14.855 10.697L16.25 10Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 7.5C2.66421 7.5 3 7.16421 3 6.75C3 6.33579 2.66421 6 2.25 6C1.83579 6 1.5 6.33579 1.5 6.75C1.5 7.16421 1.83579 7.5 2.25 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 8.5C15.6642 8.5 16 8.16421 16 7.75C16 7.33579 15.6642 7 15.25 7C14.8358 7 14.5 7.33579 14.5 7.75C14.5 8.16421 14.8358 8.5 15.25 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 15H8C7.724 15 7.5 14.776 7.5 14.5C7.5 13.672 8.172 13 9 13C9.828 13 10.5 13.672 10.5 14.5C10.5 14.776 10.276 15 10 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.25 7.75C10.25 6.645 11.145 5.75 12.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 7.75C10.25 6.645 11.145 5.75 12.25 5.75H13C14.243 5.75 15.25 4.743 15.25 3.5C15.25 2.257 14.243 1.25 13 1.25C12.325 1.25 11.726 1.553 11.314 2.024C10.826 1.26 9.974 0.75 9 0.75C8.026 0.75 7.175 1.26 6.686 2.024C6.274 1.553 5.675 1.25 5 1.25C3.757 1.25 2.75 2.257 2.75 3.5C2.75 4.743 3.757 5.75 5 5.75H5.75C6.855 5.75 7.75 6.645 7.75 7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.646 4.25C11.32 5.404 10.258 6.25 9 6.25C7.741 6.25 6.68 5.404 6.354 4.25"
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

export default ExplodingHead;
