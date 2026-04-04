import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSync({
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
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 10.25V11.25C11.25 11.802 10.802 12.25 10.25 12.25H7.75C7.198 12.25 6.75 11.802 6.75 11.25V10.25H2.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.25H11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 3.75H16.25V1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.0226 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 6.3871C14.999 6.9184 14.288 7.25 13.5 7.25C11.981 7.25 10.75 6.0188 10.75 4.5C10.75 2.9812 11.981 1.75 13.5 1.75C14.666 1.75 15.662 2.4756 16.062 3.4999"
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

export default ArchiveSync;
