import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineRight({
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
          d="M10.25 9.75H2.25C1.836 9.75 1.5 9.414 1.5 9C1.5 8.586 1.836 8.25 2.25 8.25H10.25C10.664 8.25 11 8.586 11 9C11 9.414 10.664 9.75 10.25 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.967 7.965L11.45 4.90701C11.066 4.64701 10.572 4.62101 10.163 4.83801C9.75299 5.05501 9.49899 5.47899 9.49899 5.94199V12.057C9.49899 12.52 9.75299 12.944 10.163 13.161C10.347 13.259 10.548 13.307 10.749 13.307C10.994 13.307 11.238 13.235 11.45 13.092L15.967 10.034C16.311 9.801 16.516 9.41399 16.516 8.99899C16.516 8.58399 16.31 8.19699 15.967 7.96399V7.965Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineRight;
