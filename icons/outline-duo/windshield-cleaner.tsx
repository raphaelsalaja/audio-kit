import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindshieldCleaner({
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
          d="M6.75001 6.73828C5.18368 6.88092 4.04421 7.2061 2.1918 7.66916V15.25C7.3512 13.9603 9.49567 13.8587 15.7013 15.25V7.66916C13.7981 7.24247 12.7225 6.88866 11.25 6.734L11.25 10C11.25 11.2426 10.2426 12.25 9.00001 12.25C7.75737 12.25 6.75001 11.2426 6.75001 10V6.73828Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.25 3.875C13.25 2.701 12.299 1.75 11.125 1.75C9.951 1.75 9 2.701 9 3.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 6.7603C4.75 6.9661 3.5 7.2872 2.25 7.75V15.25C6.75 13.5833 11.25 13.5833 15.75 15.25V7.75C14.5 7.2871 13.25 6.9661 12 6.7603"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.875V3.875C9 2.701 8.049 1.75 6.875 1.75C5.701 1.75 4.75 2.701 4.75 3.875"
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

export default WindshieldCleaner;
