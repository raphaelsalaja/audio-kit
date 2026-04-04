import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDownToLine({
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
          d="M14.75 14.5H3.25C2.836 14.5 2.5 14.836 2.5 15.25C2.5 15.664 2.836 16 3.25 16H14.75C15.164 16 15.5 15.664 15.5 15.25C15.5 14.836 15.164 14.5 14.75 14.5Z"
          fill={fill}
        />
        <path
          d="M7.52099 12.07C7.84399 12.579 8.39699 12.882 8.99999 12.882C9.60299 12.882 10.155 12.578 10.479 12.07L15.161 4.68701C15.503 4.14801 15.523 3.46501 15.216 2.90601C14.909 2.34701 14.32 2 13.683 2H4.31799C3.67999 2 3.09199 2.34701 2.78499 2.90601C2.47799 3.46501 2.49799 4.14801 2.83999 4.68701L7.52099 12.07Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretDownToLine;
