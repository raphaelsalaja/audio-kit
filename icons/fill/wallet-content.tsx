import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletContent({
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
          d="M6.03002 5.00499C5.91902 5.00499 5.80702 4.98099 5.70102 4.92899C5.32902 4.74699 5.17501 4.29799 5.35701 3.92599L6.56402 1.45999C6.76702 1.04199 7.12302 0.725989 7.56402 0.571989C8.00802 0.418989 8.48101 0.446989 8.90102 0.650989L14.915 3.56799C15.288 3.74899 15.443 4.19699 15.263 4.56999C15.082 4.94299 14.634 5.09799 14.261 4.91799L8.24602 2.00099C8.16502 1.96099 8.09302 1.97699 8.05502 1.98999C8.01802 2.00299 7.95102 2.03599 7.91202 2.11699L6.70402 4.58499C6.57402 4.85099 6.30702 5.00499 6.03002 5.00499Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 6H14.75C15.715 6 16.5 6.785 16.5 7.75V14.25C16.5 15.215 15.715 16 14.75 16H4.25C2.733 16 1.5 14.767 1.5 13.25V4.75C1.5 3.233 2.733 2 4.25 2C4.664 2 5 2.336 5 2.75C5 3.164 4.664 3.5 4.25 3.5C3.561 3.5 3 4.061 3 4.75C3 5.439 3.561 6 4.25 6ZM13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WalletContent;
