import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarFeather({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H8.71007C8.90012 15.2425 9.26024 14.1408 9.91925 13.0116C11.0399 11.0915 13.0604 9.05369 16.5 8.57142V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.916 10.4047C17.7764 10.1352 17.499 9.97653 17.1846 10.0028C10.8301 10.559 10.0127 17.099 10.0049 17.1649C9.95799 17.5765 10.2539 17.9481 10.6651 17.995C10.6944 17.9984 10.7227 17.9999 10.751 17.9999C11.127 17.9999 11.4512 17.7177 11.4951 17.3349C11.4995 17.2962 11.5237 17.1036 11.5877 16.8112C11.675 16.389 12.0312 15.0155 12.8281 14.1093C12.8281 14.1093 12.5 15.3905 12.7034 16.4999H13.5C16.5498 16.4999 16.9189 14.5145 17.1885 13.0648C17.3213 12.3519 17.4463 11.6791 17.8223 11.2342C18.0186 11.0023 18.0556 10.6747 17.916 10.4047Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarFeather;
