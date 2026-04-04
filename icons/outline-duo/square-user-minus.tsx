import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUserMinus({
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
          d="M5.03088 15.2505C5.27668 13.2771 6.95998 11.75 8.99998 11.75C11.04 11.75 12.7233 13.2771 12.9691 15.2505"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.25049C9.9669 9.25049 10.75 8.46699 10.75 7.50049C10.75 6.53399 9.9669 5.75049 9 5.75049C8.0331 5.75049 7.25 6.53399 7.25 7.50049C7.25 8.46699 8.0331 9.25049 9 9.25049Z"
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
          d="M9.3004 2.75049H4.75C3.645 2.75049 2.75 3.64549 2.75 4.75049V13.2505C2.75 14.3555 3.645 15.2505 4.75 15.2505H13.25C14.355 15.2505 15.25 14.3555 15.25 13.2505V6.25049"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.25049H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SquareUserMinus;
