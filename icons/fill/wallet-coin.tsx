import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCoin({
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
          d="M3.75 10C1.682 10 0 11.682 0 13.75C0 15.818 1.682 17.5 3.75 17.5C5.818 17.5 7.5 15.818 7.5 13.75C7.5 11.682 5.818 10 3.75 10ZM4.5 14.5C4.5 14.914 4.164 15.25 3.75 15.25C3.336 15.25 3 14.914 3 14.5V13C3 12.586 3.336 12.25 3.75 12.25C4.164 12.25 4.5 12.586 4.5 13V14.5Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25 5.5C1.836 5.5 1.5 5.164 1.5 4.75C1.5 3.233 2.733 2 4.25 2H12.75C13.715 2 14.5 2.785 14.5 3.75V4.25C14.5 4.664 14.164 5 13.75 5C13.336 5 13 4.664 13 4.25V3.75C13 3.612 12.888 3.5 12.75 3.5H4.25C3.561 3.5 3 4.061 3 4.75C3 5.164 2.664 5.5 2.25 5.5Z"
          fill={fill}
        />
        <path
          d="M4.25 6H14.75C15.715 6 16.5 6.785 16.5 7.75V14.25C16.5 15.215 15.715 16 14.75 16H8.474C8.801 15.315 9 14.558 9 13.75C9 10.855 6.645 8.5 3.75 8.5C2.942 8.5 2.185 8.698 1.5 9.026V4.75C1.5 4.336 1.836 4 2.25 4C2.664 4 3 4.336 3 4.75C3 5.439 3.561 6 4.25 6ZM13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WalletCoin;
