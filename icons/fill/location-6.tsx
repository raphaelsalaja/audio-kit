import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location6({
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
          d="M13 5.5C13 3.294 11.206 1.5 9 1.5C6.794 1.5 5 3.294 5 5.5C5 7.449 6.402 9.072 8.25 9.424V13.75C8.25 14.164 8.586 14.5 9 14.5C9.414 14.5 9.75 14.164 9.75 13.75V9.424C11.598 9.071 13 7.448 13 5.5Z"
          fill={fill}
        />
        <path
          d="M14.016 17.5H3.98401C3.23301 17.5 2.53501 17.128 2.11601 16.504C1.69701 15.88 1.61701 15.093 1.90101 14.398L2.92401 11.898C3.27201 11.049 4.08801 10.5 5.00601 10.5L6 10.5C6.414 10.5 6.75 10.836 6.75 11.25C6.75 11.664 6.414 12 6 12L5.00601 12C4.70001 12 4.42801 12.183 4.31301 12.466L3.29001 14.966C3.19301 15.201 3.22001 15.457 3.36101 15.668C3.50201 15.879 3.73001 16 3.98401 16H14.016C14.27 16 14.497 15.879 14.639 15.668C14.781 15.457 14.807 15.201 14.71 14.966L13.687 12.466C13.572 12.182 13.299 12 12.994 12H12.0002C11.5862 12 11.2502 11.664 11.2502 11.25C11.2502 10.836 11.5862 10.5 12.0002 10.5H12.994C13.912 10.5 14.728 11.049 15.076 11.898L16.099 14.398C16.383 15.094 16.303 15.881 15.884 16.504C15.465 17.127 14.767 17.5 14.016 17.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Location6;
