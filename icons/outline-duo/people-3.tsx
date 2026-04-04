import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function People3({
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
          d="M15.568 7.59099L17.23 13.617C17.318 13.935 17.08 14.25 16.75 14.25H15.157L14.983 16.333C14.939 16.851 14.506 17.25 13.986 17.25H12.826C12.305 17.25 11.872 16.851 11.829 16.333L11.655 14.25L10.9359 14.061C11.187 13.1001 10.5231 11.5558 10.3135 10.7525C10.6713 9.45557 10.8843 8.88819 11.242 7.59099C11.345 7.21499 11.65 6.93299 12.034 6.86799C12.433 6.80099 12.893 6.75299 13.405 6.75299C13.917 6.75299 14.378 6.80099 14.776 6.86799C15.16 6.93299 15.464 7.21599 15.568 7.59099Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.406 4.25C14.3725 4.25 15.156 3.4665 15.156 2.5C15.156 1.5335 14.3725 0.75 13.406 0.75C12.4395 0.75 11.656 1.5335 11.656 2.5C11.656 3.4665 12.4395 4.25 13.406 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.406 4.25C14.3725 4.25 15.156 3.4665 15.156 2.5C15.156 1.5335 14.3725 0.75 13.406 0.75C12.4395 0.75 11.656 1.5335 11.656 2.5C11.656 3.4665 12.4395 4.25 13.406 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.59399 4.25C5.56049 4.25 6.34399 3.4665 6.34399 2.5C6.34399 1.5335 5.56049 0.75 4.59399 0.75C3.62749 0.75 2.84399 1.5335 2.84399 2.5C2.84399 3.4665 3.62749 4.25 4.59399 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.419 13.617L6.757 7.59099C6.653 7.21599 6.349 6.93299 5.965 6.86799C5.567 6.80099 5.106 6.75299 4.594 6.75299C4.082 6.75299 3.622 6.80099 3.223 6.86799C2.839 6.93299 2.534 7.21499 2.431 7.59099C1.877 9.59999 1.323 11.609 0.769 13.617C0.681 13.935 0.921 14.25 1.251 14.25H2.844L3.018 16.333C3.061 16.851 3.494 17.25 4.015 17.25H5.175C5.695 17.25 6.128 16.851 6.172 16.333L6.346 14.25H7.939C8.269 14.25 8.509 13.935 8.421 13.617H8.419Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.656 14.2505L11.83 16.3335C11.873 16.8516 12.306 17.2505 12.827 17.2505H13.987C14.507 17.2505 14.94 16.8516 14.984 16.3335L15.158 14.2505H16.751C17.081 14.2505 17.321 13.9356 17.233 13.6174L15.571 7.5915C15.467 7.2165 15.163 6.93348 14.7789 6.86838C14.381 6.80148 13.92 6.75339 13.4079 6.75339C12.8958 6.75339 12.4359 6.80148 12.0369 6.86838C11.6529 6.93358 11.3479 7.2153 11.2449 7.5915C11.0152 8.423 10.7859 9.2543 10.5565 10.0859"
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

export default People3;
