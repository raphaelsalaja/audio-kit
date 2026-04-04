import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2Sparkle({
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
          d="M6.75 16.25C8.40685 16.25 9.75 14.9069 9.75 13.25C9.75 11.5931 8.40685 10.25 6.75 10.25C5.09315 10.25 3.75 11.5931 3.75 13.25C3.75 14.9069 5.09315 16.25 6.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 13.25V1.75C9.75 1.75 11.5 4.5 14.25 6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 16.25C8.40685 16.25 9.75 14.9069 9.75 13.25C9.75 11.5931 8.40685 10.25 6.75 10.25C5.09315 10.25 3.75 11.5931 3.75 13.25C3.75 14.9069 5.09315 16.25 6.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.49298 6.242L3.54698 5.927L3.23098 4.98C3.12898 4.674 2.62198 4.674 2.51998 4.98L2.20398 5.927L1.25798 6.242C1.10498 6.293 1.00098 6.436 1.00098 6.598C1.00098 6.76 1.10498 6.903 1.25798 6.954L2.20398 7.269L2.51998 8.216C2.57098 8.369 2.71398 8.472 2.87498 8.472C3.03598 8.472 3.17998 8.368 3.22998 8.216L3.54598 7.269L4.49198 6.954C4.64498 6.903 4.74898 6.76 4.74898 6.598C4.74898 6.436 4.64598 6.293 4.49298 6.242Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.658 10.99L15.395 10.569L14.974 9.306C14.837 8.898 14.162 8.898 14.025 9.306L13.604 10.569L12.341 10.99C12.137 11.058 11.999 11.249 11.999 11.464C11.999 11.679 12.137 11.87 12.341 11.938L13.604 12.359L14.025 13.622C14.093 13.826 14.285 13.964 14.5 13.964C14.715 13.964 14.906 13.826 14.975 13.622L15.396 12.359L16.659 11.938C16.863 11.87 17.001 11.679 17.001 11.464C17.001 11.249 16.862 11.058 16.658 10.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 3.5C5.66421 3.5 6 3.16421 6 2.75C6 2.33579 5.66421 2 5.25 2C4.83579 2 4.5 2.33579 4.5 2.75C4.5 3.16421 4.83579 3.5 5.25 3.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MusicNote2Sparkle;
