import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseLink({
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
          d="M7.5 14.5V13.5C7.5 11.2944 9.2944 9.5 11.5 9.5H12C12.5783 9.5 13.101 9.72531 13.5 10.0852C13.899 9.72531 14.4217 9.5 15 9.5H15.5C15.7061 9.5 15.9261 9.50183 16.1235 9.53333C16.1721 9.54113 16.2117 9.52939 16.25 9.47839V6.75C16.25 5.645 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V13C1.75 14.105 2.645 15 3.75 15L7.55051 15.25C7.52951 15.0845 7.5 14.6711 7.5 14.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.80988V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H6.8259"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 16.25H11.5C10.5335 16.25 9.75 15.4665 9.75 14.5V13.5C9.75 12.5335 10.5335 11.75 11.5 11.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.25H15.5C16.4665 16.25 17.25 15.4665 17.25 14.5V13.5C17.25 12.5335 16.4665 11.75 15.5 11.75H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14H14.75"
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

export default SuitcaseLink;
