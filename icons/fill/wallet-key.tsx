import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletKey({
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
          d="M0.500003 14.25C0.500003 12.7312 1.73123 11.5 3.25 11.5C4.50878 11.5 5.57003 12.3457 5.89649 13.5H9.25C9.66421 13.5 10 13.8358 10 14.25C10 14.6642 9.66421 15 9.25 15H8.5V15.75C8.5 16.1642 8.16422 16.5 7.75 16.5C7.33579 16.5 7 16.1642 7 15.75V15H5.89649C5.57003 16.1543 4.50878 17 3.25 17C1.73123 17 0.500003 15.7688 0.500003 14.25ZM3.25 13C2.55964 13 2 13.5596 2 14.25C2 14.9404 2.55964 15.5 3.25 15.5C3.94037 15.5 4.5 14.9404 4.5 14.25C4.5 13.5596 3.94037 13 3.25 13Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 5.5C1.836 5.5 1.5 5.164 1.5 4.75C1.5 3.233 2.733 2 4.25 2H12.75C13.715 2 14.5 2.785 14.5 3.75V4.25C14.5 4.664 14.164 5 13.75 5C13.336 5 13 4.664 13 4.25V3.75C13 3.612 12.888 3.5 12.75 3.5H4.25C3.561 3.5 3 4.061 3 4.75C3 5.164 2.664 5.5 2.25 5.5Z"
          fill={fill}
        />
        <path
          d="M14.75 6H4.25C3.561 6 3 5.439 3 4.75C3 4.336 2.664 4 2.25 4C1.836 4 1.5 4.336 1.5 4.75V10.3759C2.03369 10.1344 2.62615 10 3.25 10C4.77217 10 6.10526 10.7994 6.85576 12H9.25C10.4926 12 11.5 13.0074 11.5 14.25C11.5 14.9568 11.1741 15.5875 10.6643 16H14.75C15.715 16 16.5 15.215 16.5 14.25V7.75C16.5 6.785 15.715 6 14.75 6ZM13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WalletKey;
