import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WrenchScrewdriver({
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
          d="M15.25 9.25V15.25C15.25 15.8 14.802 16.25 14.25 16.25H13.25C12.698 16.25 12.25 15.8 12.25 15.25V9.25"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 5.5C9.5 3.96 8.573 2.65005 7.25 2.06995V5.75H4.25V2.06995C2.927 2.65005 2 3.9599 2 5.5C2 7.0401 2.927 8.34995 4.25 8.93005V15.25C4.25 15.8 4.698 16.25 5.25 16.25H6.25C6.802 16.25 7.25 15.8 7.25 15.25V8.93005C8.573 8.34995 9.5 7.0401 9.5 5.5Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 5.5C9.5 3.96 8.573 2.65005 7.25 2.06995V5.75H4.25V2.06995C2.927 2.65005 2 3.9599 2 5.5C2 7.0401 2.927 8.34995 4.25 8.93005V15.25C4.25 15.8 4.698 16.25 5.25 16.25H6.25C6.802 16.25 7.25 15.8 7.25 15.25V8.93005C8.573 8.34995 9.5 7.0401 9.5 5.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.25V15.25C15.25 15.8 14.802 16.25 14.25 16.25H13.25C12.698 16.25 12.25 15.8 12.25 15.25V9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 9.25V2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 5.25L14.75 3.5L14.25 1.75H13.25L12.75 3.5L13.75 5.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default WrenchScrewdriver;
