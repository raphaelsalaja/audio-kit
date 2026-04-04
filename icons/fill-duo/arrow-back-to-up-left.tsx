import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToUpLeft({
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
          d="M13.75 15H4.25C2.733 15 1.5 13.767 1.5 12.25V9.25C1.5 8.836 1.836 8.5 2.25 8.5C2.664 8.5 3 8.836 3 9.25V12.25C3 12.939 3.561 13.5 4.25 13.5H13.75C14.439 13.5 15 12.939 15 12.25V6.75C15 6.061 14.439 5.5 13.75 5.5H4.008C3.594 5.5 3.258 5.164 3.258 4.75C3.258 4.336 3.594 4 4.008 4H13.75C15.267 4 16.5 5.233 16.5 6.75V12.25C16.5 13.767 15.267 15 13.75 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.74999 8.50001C6.55799 8.50001 6.36599 8.42701 6.21999 8.28001L3.22799 5.28801C2.93499 4.99501 2.93499 4.52001 3.22799 4.22701L6.21999 1.23501C6.51299 0.942009 6.988 0.942009 7.281 1.23501C7.574 1.52801 7.574 2.00301 7.281 2.29601L4.81899 4.75801L7.281 7.22001C7.574 7.51301 7.574 7.98801 7.281 8.28101C7.135 8.42701 6.943 8.50101 6.751 8.50101L6.74999 8.50001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBackToUpLeft;
