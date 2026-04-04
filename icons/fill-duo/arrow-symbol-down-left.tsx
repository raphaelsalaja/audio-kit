import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolDownLeft({
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
          d="M3.99999 14.75C3.80799 14.75 3.61599 14.677 3.46999 14.53C3.17699 14.237 3.17699 13.762 3.46999 13.469L13.72 3.21999C14.013 2.92699 14.488 2.92699 14.781 3.21999C15.074 3.51299 15.074 3.988 14.781 4.281L4.52999 14.53C4.38399 14.676 4.19199 14.75 3.99999 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.76099 15C9.65599 15 9.549 14.978 9.448 14.931C6.482 13.563 4.22502 14.84 4.13102 14.896C3.83802 15.066 3.46101 15.019 3.22001 14.776C2.98001 14.533 2.932 14.159 3.107 13.866C3.16 13.775 4.43601 11.516 3.07101 8.554C2.89701 8.178 3.06101 7.732 3.43801 7.559C3.81201 7.386 4.25901 7.54999 4.43201 7.92599C5.37801 9.97799 5.28601 11.779 5.00501 12.997C6.22301 12.714 8.02302 12.623 10.075 13.569C10.452 13.742 10.616 14.188 10.443 14.564C10.316 14.838 10.045 15 9.76099 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolDownLeft;
