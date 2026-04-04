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
          d="M15.25 9.5H11.75C11.3359 9.5 11 9.8359 11 10.25V11.75C11 11.8877 10.8877 12 10.75 12H7.25C7.1123 12 7 11.8877 7 11.75V10.25C7 9.8359 6.6641 9.5 6.25 9.5H3.5V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H7.6519C8.06611 3.5 8.4019 3.16421 8.4019 2.75C8.4019 2.33579 8.06611 2 7.6519 2H4.75C3.23054 2 2 3.23203 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.25C16 9.8359 15.6641 9.5 15.25 9.5Z"
          fill={fill}
        />
        <path
          d="M16.4873 3.5381L14.5928 2.9072L13.9615 1.0127C13.8594 0.706999 13.5728 0.5 13.2501 0.5C12.9274 0.5 12.6407 0.706999 12.5387 1.0127L11.9074 2.9072L10.0129 3.5381C9.7067 3.6406 9.5002 3.9268 9.5002 4.25C9.5002 4.5732 9.7067 4.8594 10.0129 4.9619L11.9074 5.5928L12.5387 7.4873C12.6408 7.793 12.9274 8 13.2501 8C13.5728 8 13.8595 7.793 13.9615 7.4873L14.5928 5.5928L16.4873 4.9619C16.7935 4.8594 17 4.5732 17 4.25C17 3.9268 16.7935 3.6406 16.4873 3.5381Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArchiveSparkle;
