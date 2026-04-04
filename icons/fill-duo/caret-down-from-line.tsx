import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDownFromLine({
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
          d="M14.75 2H3.25C2.836 2 2.5 2.336 2.5 2.75C2.5 3.164 2.836 3.5 3.25 3.5H14.75C15.164 3.5 15.5 3.164 15.5 2.75C15.5 2.336 15.164 2 14.75 2Z"
          fill={fill}
        />
        <path
          d="M13.682 5H4.31799C3.67999 5 3.09199 5.34701 2.78499 5.90601C2.47799 6.46501 2.49799 7.14801 2.83999 7.68701L7.52199 15.07C7.84499 15.579 8.39699 15.882 8.99999 15.882C9.60299 15.882 10.155 15.578 10.478 15.07L15.16 7.68701C15.501 7.14801 15.522 6.46501 15.215 5.90601C14.908 5.34701 14.32 5 13.682 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretDownFromLine;
