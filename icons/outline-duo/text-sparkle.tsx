import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSparkle({
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
          d="M9 2.75V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.49301 6.769L3.54701 6.454L3.23101 5.507C3.12901 5.201 2.62201 5.201 2.52001 5.507L2.20401 6.454L1.25801 6.769C1.10501 6.82 1.00101 6.963 1.00101 7.125C1.00101 7.287 1.10501 7.43 1.25801 7.481L2.20401 7.796L2.52001 8.743C2.57101 8.896 2.71401 8.999 2.87501 8.999C3.03601 8.999 3.18001 8.895 3.23001 8.743L3.54601 7.796L4.49201 7.481C4.64501 7.43 4.74901 7.287 4.74901 7.125C4.74901 6.963 4.64601 6.82 4.49301 6.769Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.658 9.99L15.395 9.569L14.974 8.306C14.837 7.898 14.162 7.898 14.025 8.306L13.604 9.569L12.341 9.99C12.137 10.058 11.999 10.249 11.999 10.464C11.999 10.679 12.137 10.87 12.341 10.938L13.604 11.359L14.025 12.622C14.093 12.826 14.285 12.964 14.5 12.964C14.715 12.964 14.906 12.826 14.975 12.622L15.396 11.359L16.659 10.938C16.863 10.87 17.001 10.679 17.001 10.464C17.001 10.249 16.862 10.058 16.658 9.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 13C5.66421 13 6 12.6642 6 12.25C6 11.8358 5.66421 11.5 5.25 11.5C4.83579 11.5 4.5 11.8358 4.5 12.25C4.5 12.6642 4.83579 13 5.25 13Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default TextSparkle;
