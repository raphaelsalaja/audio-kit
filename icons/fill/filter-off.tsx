import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilterOff({
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
          d="M7 14.1818V16.0325C7 16.2894 7.13144 16.5284 7.34834 16.6659C7.56525 16.8035 7.83747 16.8205 8.06979 16.7109L10.5737 15.6387C10.8363 15.5149 11.0039 15.2507 11.0039 14.9603V10.1785L7 14.1818Z"
          fill={fill}
        />
        <path
          d="M15.7806 2.21986C15.642 2.08127 15.4521 2 15.25 2H2.75C2.46853 2 2.21075 2.15761 2.08245 2.40814C1.95414 2.65868 1.97693 2.95996 2.14144 3.18835L7 9.9334V10.998L15.7806 2.21986Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.72 1.21999C16.013 0.926994 16.488 0.926994 16.781 1.21999C17.074 1.51299 17.074 1.98799 16.781 2.28099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FilterOff;
