import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filters({
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
          d="M13.4868 7.0974C13.4955 6.98275 13.5 6.8669 13.5 6.75C13.5 4.26472 11.4853 2.25 9 2.25C6.51472 2.25 4.5 4.26472 4.5 6.75C4.5 6.86689 4.50446 6.98275 4.51321 7.0974C2.89021 7.777 1.75 9.38035 1.75 11.25C1.75 13.7353 3.76472 15.75 6.25 15.75C7.28562 15.75 8.23953 15.4002 9 14.8122C9.76047 15.4002 10.7144 15.75 11.75 15.75C14.2353 15.75 16.25 13.7353 16.25 11.25C16.25 9.38035 15.1098 7.77701 13.4868 7.0974Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.496 9.757C10.66 10.224 10.75 10.727 10.75 11.25C10.75 13.735 8.735 15.75 6.25 15.75C3.765 15.75 1.75 13.735 1.75 11.25C1.75 10.339 2.021 9.491 2.486 8.783"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.511 15.745C12.042 15.773 12.587 15.707 13.123 15.536C15.49 14.778 16.794 12.245 16.036 9.878C15.278 7.511 12.745 6.207 10.378 6.965C9.50999 7.243 8.78599 7.759 8.25299 8.418"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.156 11.171C7.695 11.083 7.239 10.92 6.806 10.679C4.636 9.468 3.859 6.727 5.07 4.556C6.281 2.385 9.022 1.609 11.193 2.82C11.904 3.217 12.465 3.778 12.856 4.429"
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

export default Filters;
