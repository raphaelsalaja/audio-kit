import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ranking({
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
          d="M1.5 12.75C1.5 11.7838 2.28379 11 3.25 11H6.75C7.16421 11 7.5 11.3358 7.5 11.75V15.25C7.5 15.6642 7.16421 16 6.75 16H3.25C2.28379 16 1.5 15.2162 1.5 14.25V12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5 10.25C10.5 9.83579 10.8358 9.5 11.25 9.5H14.75C15.7162 9.5 16.5 10.2838 16.5 11.25V14.25C16.5 15.2162 15.7162 16 14.75 16H11.25C10.8358 16 10.5 15.6642 10.5 15.25V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.44161 0.0249016C9.77073 0.111878 9.99999 0.409597 9.99999 0.750008V4.75001C9.99999 5.16422 9.6642 5.50001 9.24999 5.50001C8.83577 5.50001 8.49999 5.16422 8.49999 4.75001V2.31808C8.33565 2.38552 8.15567 2.44123 7.95981 2.47867C7.55296 2.55644 7.1601 2.28968 7.08232 1.88283C7.00455 1.47598 7.27132 1.08312 7.67816 1.00535C7.98502 0.946687 8.21806 0.789305 8.38228 0.633004C8.4642 0.555031 8.54176 0.467981 8.60222 0.371982C8.77196 0.0810569 9.11529 -0.0613378 9.44161 0.0249016Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 8.75C6 7.78379 6.78379 7 7.75 7H10.25C11.2162 7 12 7.78379 12 8.75V15.25C12 15.6642 11.6642 16 11.25 16H6.75C6.33579 16 6 15.6642 6 15.25V8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Ranking;
