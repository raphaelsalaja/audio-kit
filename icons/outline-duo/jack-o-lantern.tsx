import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function JackOLantern({
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
          d="M11 4.75C10.291 4.75 9.617 4.895 9 5.149C8.383 4.895 7.709 4.75 7 4.75C4.101 4.75 1.75 7.101 1.75 10C1.75 12.899 4.101 15.25 7 15.25H11C13.899 15.25 16.25 12.899 16.25 10C16.25 7.101 13.899 4.75 11 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11 4.75C10.291 4.75 9.617 4.895 9 5.149C8.383 4.895 7.709 4.75 7 4.75C4.101 4.75 1.75 7.101 1.75 10C1.75 12.899 4.101 15.25 7 15.25H11C13.899 15.25 16.25 12.899 16.25 10C16.25 7.101 13.899 4.75 11 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 4.75C7.861 3.253 8.394 2.024 9.25 1L11.25 1.25C10.699 2.537 10.354 3.742 10.5 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.306 10H7.646C7.829 10 7.997 9.901 8.084 9.741C8.172 9.581 8.165 9.387 8.067 9.232L6.897 7.388C6.713 7.099 6.237 7.099 6.053 7.388L4.883 9.232C4.785 9.386 4.779 9.581 4.866 9.741C4.954 9.901 5.122 10 5.304 10H5.306Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.354 10H12.694C12.877 10 13.045 9.901 13.132 9.741C13.22 9.581 13.213 9.387 13.115 9.232L11.945 7.388C11.761 7.099 11.285 7.099 11.101 7.388L9.931 9.232C9.833 9.386 9.827 9.581 9.914 9.741C10.002 9.901 10.17 10 10.352 10H10.354Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.146 11.285C13.047 11.077 12.817 10.968 12.595 11.01C11.899 11.151 11.2 11.239 10.5 11.298V12.001C10.5 12.277 10.276 12.501 10 12.501H9.5C9.224 12.501 9 12.277 9 12.001V11.374C7.799 11.374 6.598 11.253 5.405 11.011C5.179 10.968 4.953 11.078 4.854 11.286C4.755 11.493 4.81 11.741 4.988 11.887C6.319 12.983 7.659 13.531 9 13.531C10.341 13.531 11.681 12.983 13.012 11.887C13.19 11.741 13.244 11.493 13.146 11.286V11.285Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default JackOLantern;
