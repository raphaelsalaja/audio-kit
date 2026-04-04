import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSparkle({
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
          d="M11.25 10.25V11.25C11.25 11.802 10.802 12.25 10.25 12.25H7.75C7.198 12.25 6.75 11.802 6.75 11.25V10.25H2.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.25H11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.6519 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.4873 3.5381L14.5928 2.9072L13.9615 1.0127C13.8594 0.706999 13.5728 0.5 13.2501 0.5C12.9274 0.5 12.6407 0.706999 12.5387 1.0127L11.9074 2.9072L10.0129 3.5381C9.70669 3.6406 9.50018 3.9268 9.50018 4.25C9.50018 4.5732 9.70669 4.8594 10.0129 4.9619L11.9074 5.5928L12.5387 7.4873C12.6408 7.793 12.9274 8 13.2501 8C13.5728 8 13.8595 7.793 13.9615 7.4873L14.5928 5.5928L16.4873 4.9619C16.7935 4.8594 17 4.5732 17 4.25C17 3.9268 16.7935 3.6406 16.4873 3.5381Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArchiveSparkle;
