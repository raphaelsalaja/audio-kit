import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GoldBars({
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
          d="M3.548 9.25H6.452C6.919 9.25 7.324 9.57302 7.427 10.028L8.5 14.75H1.5L2.573 10.028C2.676 9.57302 3.081 9.25 3.548 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.548 9.25H14.452C14.919 9.25 15.324 9.57302 15.427 10.028L16.5 14.75H9.5L10.573 10.028C10.676 9.57302 11.081 9.25 11.548 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.548 3.75H10.452C10.919 3.75 11.324 4.07302 11.427 4.52802L12.5 9.25H5.5L6.573 4.52802C6.676 4.07302 7.081 3.75 7.548 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.5 14.75H9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.243 3.76902L3.297 3.45402L2.98101 2.507C2.87901 2.201 2.372 2.201 2.27 2.507L1.95401 3.45402L1.00801 3.76902C0.855011 3.82002 0.751007 3.96301 0.751007 4.12501C0.751007 4.28701 0.855011 4.43 1.00801 4.481L1.95401 4.796L2.27 5.74302C2.321 5.89602 2.46401 5.999 2.62501 5.999C2.78601 5.999 2.93001 5.89502 2.98001 5.74302L3.29601 4.796L4.242 4.481C4.395 4.43 4.49901 4.28701 4.49901 4.12501C4.49901 3.96301 4.396 3.82002 4.243 3.76902Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M17.408 2.026L16.145 1.60501L15.724 0.342011C15.587 -0.0659893 14.912 -0.0659893 14.775 0.342011L14.354 1.60501L13.091 2.026C12.887 2.094 12.749 2.285 12.749 2.5C12.749 2.715 12.887 2.906 13.091 2.974L14.354 3.39499L14.775 4.65799C14.843 4.86199 15.035 5 15.25 5C15.465 5 15.656 4.86199 15.725 4.65799L16.146 3.39499L17.409 2.974C17.613 2.906 17.751 2.715 17.751 2.5C17.751 2.285 17.612 2.094 17.408 2.026Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.25 1.5C7.664 1.5 8 1.164 8 0.75C8 0.336 7.664 0 7.25 0C6.836 0 6.5 0.336 6.5 0.75C6.5 1.164 6.836 1.5 7.25 1.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GoldBars;
