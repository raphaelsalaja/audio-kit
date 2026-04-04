import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellSnooze({
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
          d="M10.588 15.185C10.493 15.068 10.351 15 10.2 15H7.80101C7.65001 15 7.50801 15.068 7.41301 15.185C7.31801 15.302 7.28101 15.456 7.31201 15.603C7.48501 16.425 8.18001 17 9.00101 17C9.82201 17 10.517 16.425 10.69 15.603C10.721 15.456 10.683 15.302 10.588 15.185Z"
          fill={secondaryfill}
        />
        <path
          d="M15.75 12C15.061 12 14.5 11.439 14.5 10.75V7.5H12.75C11.869 7.5 11.064 6.982 10.701 6.18C10.337 5.377 10.477 4.43 11.058 3.768L11.58 3.171C10.933 2.775 10.5 2.062 10.5 1.25C10.5 1.238 10.503 1.226 10.504 1.214C10.025 1.078 9.522 1 9 1C5.967 1 3.5 3.467 3.5 6.5V10.75C3.5 11.439 2.939 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 13.164 1.836 13.5 2.25 13.5H9H15.75C16.164 13.5 16.5 13.164 16.5 12.75C16.5 12.336 16.164 12 15.75 12Z"
          fill={fill}
        />
        <path
          d="M16.25 6H12.75C12.456 6 12.188 5.828 12.067 5.56C11.946 5.292 11.992 4.977 12.186 4.756L14.598 2H12.751C12.337 2 12.001 1.664 12.001 1.25C12.001 0.836 12.337 0.5 12.751 0.5H16.251C16.545 0.5 16.813 0.672 16.934 0.94C17.055 1.208 17.009 1.523 16.815 1.744L14.403 4.5H16.25C16.664 4.5 17 4.836 17 5.25C17 5.664 16.664 6 16.25 6Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BellSnooze;
