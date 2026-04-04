import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNoteSparkle({
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
          d="M9.615 2.38199L13.115 1.90499C13.715 1.82299 14.25 2.28999 14.25 2.89599V4.62699C14.25 5.12699 13.881 5.54999 13.385 5.61799L8.75 6.24999V3.37299C8.75 2.87299 9.119 2.44999 9.615 2.38199Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6 16.25C7.51878 16.25 8.75 15.0188 8.75 13.5C8.75 11.9812 7.51878 10.75 6 10.75C4.48122 10.75 3.25 11.9812 3.25 13.5C3.25 15.0188 4.48122 16.25 6 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.615 2.38199L13.115 1.90499C13.715 1.82299 14.25 2.28999 14.25 2.89599V4.62699C14.25 5.12699 13.881 5.54999 13.385 5.61799L8.75 6.24999V3.37299C8.75 2.87299 9.119 2.44999 9.615 2.38199Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 6.25V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 16.25C7.51878 16.25 8.75 15.0188 8.75 13.5C8.75 11.9812 7.51878 10.75 6 10.75C4.48122 10.75 3.25 11.9812 3.25 13.5C3.25 15.0188 4.48122 16.25 6 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.49301 5.742L3.54701 5.427L3.23101 4.48C3.12901 4.174 2.62201 4.174 2.52001 4.48L2.20401 5.427L1.25801 5.742C1.10501 5.793 1.00101 5.936 1.00101 6.098C1.00101 6.26 1.10501 6.403 1.25801 6.454L2.20401 6.769L2.52001 7.716C2.57101 7.869 2.71401 7.972 2.87501 7.972C3.03601 7.972 3.18001 7.868 3.23001 7.716L3.54601 6.769L4.49201 6.454C4.64501 6.403 4.74901 6.26 4.74901 6.098C4.74901 5.936 4.64601 5.793 4.49301 5.742Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.658 10.99L15.395 10.569L14.974 9.306C14.837 8.898 14.162 8.898 14.025 9.306L13.604 10.569L12.341 10.99C12.137 11.058 11.999 11.249 11.999 11.464C11.999 11.679 12.137 11.87 12.341 11.938L13.604 12.359L14.025 13.622C14.093 13.826 14.285 13.964 14.5 13.964C14.715 13.964 14.906 13.826 14.975 13.622L15.396 12.359L16.659 11.938C16.863 11.87 17.001 11.679 17.001 11.464C17.001 11.249 16.862 11.058 16.658 10.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 3C5.66421 3 6 2.66421 6 2.25C6 1.83579 5.66421 1.5 5.25 1.5C4.83579 1.5 4.5 1.83579 4.5 2.25C4.5 2.66421 4.83579 3 5.25 3Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MusicNoteSparkle;
