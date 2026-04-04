import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tree2({
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
          d="M11.6552 13H12.3793C14.3789 13 16 11.394 16 9.41304C16 7.59374 14.629 6.1073 12.8572 5.87391C12.8572 5.85765 12.8621 5.84235 12.8621 5.82609C12.8621 3.71313 11.1328 2 9 2C6.86717 2 5.13793 3.71313 5.13793 5.82609C5.13793 5.84235 5.14276 5.85765 5.14276 5.87391C3.37103 6.10826 2 7.5947 2 9.41304C2 11.394 3.6211 13 5.62069 13H6.34483"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 13.25H12.5C14.571 13.25 16.25 11.571 16.25 9.5C16.25 7.598 14.83 6.044 12.995 5.8C12.995 5.783 13 5.767 13 5.75C13 3.541 11.209 1.75 9 1.75C6.791 1.75 5 3.541 5 5.75C5 5.767 5.005 5.783 5.005 5.8C3.17 6.045 1.75 7.599 1.75 9.5C1.75 11.571 3.429 13.25 5.5 13.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.25L6.5 9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.5L11 8.5"
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

export default Tree2;
