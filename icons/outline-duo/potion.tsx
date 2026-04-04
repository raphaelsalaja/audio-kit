import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Potion({
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
          d="M3.80222 10.2597C4.21887 10.6851 5.17544 11.4426 6.1849 11.5649C7.52198 11.727 8.49442 11.3218 8.96037 11.0382C9.42633 10.7546 10.3988 10.2278 11.7561 10.4709C12.7664 10.6519 13.642 11.2032 14.1908 11.7908C13.8094 14.3147 11.6302 16.25 9 16.25C6.101 16.25 3.75 13.899 3.75 11C3.75 10.7485 3.76781 10.5013 3.80222 10.2597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.25 9.5C7.66421 9.5 8 9.16421 8 8.75C8 8.33579 7.66421 8 7.25 8C6.83579 8 6.5 8.33579 6.5 8.75C6.5 9.16421 6.83579 9.5 7.25 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.19 11.794C12.868 10.325 10.688 9.988 8.98102 11C7.28802 12.004 5.12902 11.68 3.80402 10.241"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 1.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 1.75V6.072C5.216 6.795 3.75 8.718 3.75 11C3.75 13.899 6.101 16.25 9 16.25C11.899 16.25 14.25 13.899 14.25 11C14.25 8.717 12.784 6.795 10.75 6.071V1.75"
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

export default Potion;
