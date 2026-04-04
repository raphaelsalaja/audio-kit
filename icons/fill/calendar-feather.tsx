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
          d="M5.75 3.5C5.336 3.5 5 3.164 5 2.75V0.75C5 0.336 5.336 0 5.75 0C6.164 0 6.5 0.336 6.5 0.75V2.75C6.5 3.164 6.164 3.5 5.75 3.5Z"
          fill={fill}
        />
        <path
          d="M12.25 3.5C11.836 3.5 11.5 3.164 11.5 2.75V0.75C11.5 0.336 11.836 0 12.25 0C12.664 0 13 0.336 13 0.75V2.75C13 3.164 12.664 3.5 12.25 3.5Z"
          fill={fill}
        />
        <path
          d="M13.75 2H4.25C2.733 2 1.5 3.233 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.12109C8.53509 16 8.87109 15.664 8.87109 15.25C8.87109 14.836 8.53509 14.5 8.12109 14.5H4.25C3.561 14.5 3 13.939 3 13.25V7H15V7.9402C15 8.3542 15.336 8.6902 15.75 8.6902C16.164 8.6902 16.5 8.3542 16.5 7.9402V4.75C16.5 3.233 15.267 2 13.75 2Z"
          fill={fill}
        />
        <path
          d="M17.916 10.4047C17.7764 10.1352 17.499 9.97653 17.1846 10.0028C10.8301 10.559 10.0127 17.099 10.0049 17.1649C9.95799 17.5765 10.2539 17.9481 10.6651 17.995C10.6944 17.9984 10.7227 17.9999 10.751 17.9999C11.127 17.9999 11.4512 17.7177 11.4951 17.3349C11.4995 17.2962 11.5237 17.1036 11.5877 16.8112C11.675 16.389 12.0312 15.0155 12.8281 14.1093C12.8281 14.1093 12.5 15.3905 12.7034 16.4999H13.5C16.5498 16.4999 16.9189 14.5145 17.1885 13.0648C17.3213 12.3519 17.4463 11.6791 17.8223 11.2342C18.0186 11.0023 18.0556 10.6747 17.916 10.4047Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CalendarFeather;
