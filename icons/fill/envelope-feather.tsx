import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeFeather({
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
          d="M17.916 10.4047C17.7764 10.1352 17.499 9.97653 17.1846 10.0028C10.8301 10.559 10.0127 17.099 10.0049 17.1649C9.95799 17.5765 10.2539 17.9481 10.6651 17.995C10.6944 17.9984 10.7227 17.9999 10.751 17.9999C11.127 17.9999 11.4512 17.7177 11.4951 17.3349C11.4995 17.2962 11.5237 17.1036 11.5877 16.8112C11.675 16.389 12.0312 15.0155 12.8281 14.1093C12.8281 14.1093 12.5 15.3905 12.7034 16.4999H13.5C16.5498 16.4999 16.9189 14.5145 17.1885 13.0648C17.3213 12.3519 17.4463 11.6791 17.8223 11.2342C18.0186 11.0023 18.0556 10.6747 17.916 10.4047Z"
          fill={secondaryfill}
        />
        <path
          d="M1 5.25C1 3.73203 2.23054 2.5 3.75 2.5H14.25C15.7695 2.5 17 3.73203 17 5.25V7.85001C17 8.26422 16.6642 8.60001 16.25 8.60001C15.8358 8.60001 15.5 8.26422 15.5 7.85001V6.521L9.846 9.641C9.581 9.787 9.29 9.86 9 9.86C8.71 9.86 8.419 9.787 8.154 9.641L2.5 6.521V12.75C2.5 13.439 3.061 14 3.75 14H8.2774C8.69161 14 9.0274 14.3358 9.0274 14.75C9.0274 15.1642 8.69161 15.5 8.2774 15.5H3.75C2.23054 15.5 1 14.268 1 12.75V5.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeFeather;
