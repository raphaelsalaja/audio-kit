import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellSlash({
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
          d="M2.25 13.5H4L13.928 4.072C13.029 2.255 11.161 1 9 1C5.967 1 3.5 3.467 3.5 6.5V10.75C3.5 11.439 2.939 12 2.25 12C1.836 12 1.5 12.336 1.5 12.75C1.5 13.164 1.836 13.5 2.25 13.5Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.6819 13.5H15.75C16.164 13.5 16.5 13.164 16.5 12.75C16.5 12.336 16.164 12 15.75 12C15.061 12 14.5 11.439 14.5 10.75V6.68286L7.6819 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BellSlash;
