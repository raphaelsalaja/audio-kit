import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeSparkle({
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
          d="M1.75 5.64296L8.565 9.54C8.84 9.673 9.16 9.673 9.434 9.54L16.25 5.64239V5.25C16.25 4.14543 15.3546 3.25 14.25 3.25H3.75C2.64543 3.25 1.75 4.14543 1.75 5.25V5.64296Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 5.75L8.517 9.483C8.818 9.649 9.182 9.649 9.483 9.483L16.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.01401V5.25C16.25 4.146 15.355 3.25 14.25 3.25H3.75C2.645 3.25 1.75 4.146 1.75 5.25V12.75C1.75 13.854 2.645 14.75 3.75 14.75H8.2929"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.4873 13.5381L15.5928 12.9072L14.9615 11.0127C14.8594 10.707 14.5728 10.5 14.2501 10.5C13.9274 10.5 13.6407 10.707 13.5387 11.0127L12.9074 12.9072L11.0129 13.5381C10.7067 13.6406 10.5002 13.9268 10.5002 14.25C10.5002 14.5732 10.7067 14.8594 11.0129 14.9619L12.9074 15.5928L13.5387 17.4873C13.6408 17.793 13.9274 18 14.2501 18C14.5728 18 14.8595 17.793 14.9615 17.4873L15.5928 15.5928L17.4873 14.9619C17.7935 14.8594 18 14.5732 18 14.25C18 13.9268 17.7935 13.6406 17.4873 13.5381Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default EnvelopeSparkle;
