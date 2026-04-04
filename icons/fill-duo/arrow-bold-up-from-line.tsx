import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldUpFromLine({
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
          d="M11.25 15.5H6.75C6.336 15.5 6 15.836 6 16.25C6 16.664 6.336 17 6.75 17H11.25C11.664 17 12 16.664 12 16.25C12 15.836 11.664 15.5 11.25 15.5Z"
          fill={fill}
        />
        <path
          d="M14.441 6.971L9.97801 1.366C9.50001 0.766998 8.49902 0.766998 8.02202 1.366L3.55902 6.972C3.25802 7.35 3.20101 7.857 3.41101 8.293C3.62101 8.729 4.053 9 4.537 9H6.00001V12.25C6.00001 13.215 6.78501 14 7.75001 14H10.25C11.215 14 12 13.215 12 12.25V9H13.463C13.947 9 14.379 8.729 14.589 8.293C14.799 7.856 14.742 7.349 14.441 6.971Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldUpFromLine;
