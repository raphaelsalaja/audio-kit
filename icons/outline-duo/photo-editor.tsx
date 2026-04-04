import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoEditor({
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
          d="M13.5 6.75C13.5 6.8669 13.4955 6.98275 13.4868 7.0974C15.1098 7.77701 16.25 9.38035 16.25 11.25C16.25 13.7353 14.2353 15.75 11.75 15.75C10.7144 15.75 9.76047 15.4002 9 14.8122C8.23953 15.4002 7.28562 15.75 6.25 15.75C3.76472 15.75 1.75 13.7353 1.75 11.25C1.75 9.38035 2.89021 7.777 4.51321 7.0974C4.50446 6.98275 4.5 6.86689 4.5 6.75C4.5 4.26472 6.51472 2.25 9 2.25C11.4853 2.25 13.5 4.26472 13.5 6.75ZM7.26828 10.8999C7.30652 10.186 7.70807 8.54792 9.00836 7.70657C10.3851 8.70092 10.7485 10.1733 10.7102 10.8808C10.2003 11.1421 8.79801 11.5118 7.26828 10.8999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 7.68798C10.065 8.51098 10.75 9.80098 10.75 11.25C10.75 13.735 8.735 15.75 6.25 15.75C3.765 15.75 1.75 13.735 1.75 11.25C1.75 9.37998 2.89 7.77698 4.513 7.09698"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.263 10.903C7.44 8.58 9.381 6.75 11.75 6.75C14.235 6.75 16.25 8.765 16.25 11.25C16.25 13.735 14.235 15.75 11.75 15.75C10.714 15.75 9.76 15.4 9 14.812"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.737 10.903C10.203 11.127 9.616 11.25 9 11.25C6.515 11.25 4.5 9.235 4.5 6.75C4.5 4.265 6.515 2.25 9 2.25C11.485 2.25 13.5 4.265 13.5 6.75C13.5 6.867 13.496 6.983 13.487 7.097"
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

export default PhotoEditor;
