import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileConnection({
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
          d="M1.73789 14.75L0.996531 15.7771V5.04001C3.05853 5.63801 4.83189 7.54201 4.83189 9.79701L6.06989 11.448L4.82889 11.944L4.73689 13.218C4.67489 14.082 3.95589 14.75 3.09089 14.75H1.73789Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 14.75L16.9914 15.7771V5.04001C14.9294 5.63801 13.156 7.54201 13.156 9.79701L11.918 11.448L13.159 11.944L13.251 13.218C13.313 14.082 14.032 14.75 14.897 14.75H16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.768 4.98249C10.316 4.53049 9.691 4.25049 9 4.25049C8.31 4.25049 7.68499 4.53049 7.23199 4.98249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.536 3.21449C11.631 2.30949 10.381 1.75049 9 1.75049C7.619 1.75049 6.36899 2.31049 5.46399 3.21449"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.50049C9.414 7.50049 9.75 7.16469 9.75 6.75049C9.75 6.33629 9.414 6.00049 9 6.00049C8.586 6.00049 8.25 6.33629 8.25 6.75049C8.25 7.16469 8.586 7.50049 9 7.50049Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 16.25V14.75H3.103C3.968 14.75 4.68699 14.082 4.74899 13.218L4.841 11.944L6.082 11.448L4.84399 9.79701C4.84399 7.54201 3.33599 5.63801 1.27399 5.04001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.5 10C2.914 10 3.25 9.664 3.25 9.25C3.25 8.836 2.914 8.5 2.5 8.5C2.086 8.5 1.75 8.836 1.75 9.25C1.75 9.664 2.086 10 2.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 16.25V14.75H14.897C14.032 14.75 13.313 14.082 13.251 13.218L13.159 11.944L11.918 11.448L13.156 9.79701C13.156 7.54201 14.664 5.63801 16.726 5.04001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 10C15.914 10 16.25 9.664 16.25 9.25C16.25 8.836 15.914 8.5 15.5 8.5C15.086 8.5 14.75 8.836 14.75 9.25C14.75 9.664 15.086 10 15.5 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SideProfileConnection;
