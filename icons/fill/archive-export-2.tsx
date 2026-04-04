import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveExport2({
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
          d="M16.25 1H12.75C12.3359 1 12 1.3359 12 1.75C12 2.1641 12.3359 2.5 12.75 2.5H14.4395L11.2198 5.7197C10.9268 6.0127 10.9268 6.4873 11.2198 6.7802C11.3663 6.9267 11.5582 6.9999 11.7501 6.9999C11.942 6.9999 12.1339 6.9267 12.2804 6.7802L15.5001 3.5605V5.25C15.5001 5.6641 15.836 6 16.2501 6C16.6642 6 17.0001 5.6641 17.0001 5.25V1.75C17.0001 1.3359 16.6641 1 16.25 1Z"
          fill={secondaryfill}
        />
        <path
          d="M16 13.25C16 14.7666 14.7666 16 13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.23203 3.23054 2 4.75 2H9.92099C10.3352 2 10.671 2.33579 10.671 2.75C10.671 3.16421 10.3352 3.5 9.92099 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V9.5H6.25C6.6641 9.5 7 9.8359 7 10.25V11.75C7 11.8877 7.1123 12 7.25 12H10.75C10.8877 12 11 11.8877 11 11.75V10.25C11 9.8359 11.3359 9.5 11.75 9.5H14.5V8.07892C14.5 7.6647 14.8358 7.32892 15.25 7.32892C15.6642 7.32892 16 7.6647 16 8.07892V13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveExport2;
