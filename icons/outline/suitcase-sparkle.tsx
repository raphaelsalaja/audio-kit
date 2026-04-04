import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseSparkle({
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
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.02289V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.4873 12.5381L15.5928 11.9072L14.9615 10.0127C14.8594 9.707 14.5728 9.5 14.2501 9.5C13.9274 9.5 13.6407 9.707 13.5387 10.0127L12.9074 11.9072L11.0129 12.5381C10.7067 12.6406 10.5002 12.9268 10.5002 13.25C10.5002 13.5732 10.7067 13.8594 11.0129 13.9619L12.9074 14.5928L13.5387 16.4873C13.6408 16.793 13.9274 17 14.2501 17C14.5728 17 14.8595 16.793 14.9615 16.4873L15.5928 14.5928L17.4873 13.9619C17.7935 13.8594 18 13.5732 18 13.25C18 12.9268 17.7935 12.6406 17.4873 12.5381Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SuitcaseSparkle;
