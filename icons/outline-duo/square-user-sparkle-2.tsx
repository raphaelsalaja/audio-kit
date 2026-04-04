import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUserSparkle2({
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
          d="M9 9.25049C9.9669 9.25049 10.75 8.46699 10.75 7.50049C10.75 6.53399 9.9669 5.75049 9 5.75049C8.0331 5.75049 7.25 6.53399 7.25 7.50049C7.25 8.46699 8.0331 9.25049 9 9.25049Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.03088 15.2505C5.27668 13.2771 6.95998 11.75 8.99998 11.75C11.04 11.75 12.7233 13.2771 12.9691 15.2505"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.25049C9.9669 9.25049 10.75 8.46699 10.75 7.50049C10.75 6.53399 9.9669 5.75049 9 5.75049C8.0331 5.75049 7.25 6.53399 7.25 7.50049C7.25 8.46699 8.0331 9.25049 9 9.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.03088 15.2505C5.27668 13.2771 6.95998 11.75 8.99998 11.75C11.04 11.75 12.7233 13.2771 12.9691 15.2505"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.7664 2.75049H4.75C3.645 2.75049 2.75 3.64649 2.75 4.75049V13.2505C2.75 14.3545 3.645 15.2505 4.75 15.2505H13.25C14.355 15.2505 15.25 14.3545 15.25 13.2505V8.18779"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.589 2.3885L16.074 1.8825L15.569 0.3675C15.405 -0.1225 14.594 -0.1225 14.43 0.3675L13.925 1.8825L12.41 2.3885C12.165 2.4695 12 2.6995 12 2.9575C12 3.2155 12.165 3.4455 12.41 3.5265L13.925 4.0325L14.43 5.5475C14.512 5.7925 14.742 5.9575 15 5.9575C15.258 5.9575 15.487 5.7925 15.57 5.5475L16.075 4.0325L17.59 3.5265C17.835 3.4455 18 3.2155 18 2.9575C18 2.6995 17.834 2.4705 17.589 2.3885Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareUserSparkle2;
