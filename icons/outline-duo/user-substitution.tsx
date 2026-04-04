import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserSubstitution({
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
          d="M6.80701 7.25C8.04965 7.25 9.05701 6.24264 9.05701 5C9.05701 3.75736 8.04965 2.75 6.80701 2.75C5.56437 2.75 4.55701 3.75736 4.55701 5C4.55701 6.24264 5.56437 7.25 6.80701 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.80701 7.25C8.04965 7.25 9.05701 6.24264 9.05701 5C9.05701 3.75736 8.04965 2.75 6.80701 2.75C5.56437 2.75 4.55701 3.75736 4.55701 5C4.55701 6.24264 5.56437 7.25 6.80701 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.25L17.25 8.25L15.25 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 8.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 11.25L11.25 13.25L13.25 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.6709 10.5874C8.8353 10.0686 7.86351 9.75049 6.80701 9.75049C4.66201 9.75049 2.80701 10.9795 1.90101 12.7705C1.50101 13.5615 1.929 14.5273 2.767 14.8184C3.798 15.1766 5.17501 15.5015 6.80701 15.5015C7.63461 15.5015 8.36571 15.4004 9.04621 15.2698"
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

export default UserSubstitution;
