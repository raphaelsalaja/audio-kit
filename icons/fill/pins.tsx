import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pins({
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
          d="M7.25 3C3.81382 3 1 5.73022 1 9.1293C1 11.3986 2.1343 13.3621 3.39479 14.7823C4.03009 15.4981 4.71384 16.0952 5.34007 16.5461C5.95395 16.9881 6.55498 17.3203 7.02866 17.4666C7.17286 17.5111 7.32714 17.5111 7.47134 17.4666C7.94502 17.3203 8.54605 16.9881 9.15993 16.5461C9.78616 16.0952 10.4699 15.4981 11.1052 14.7823C12.3657 13.3621 13.5 11.3986 13.5 9.1293C13.5 5.73022 10.6862 3 7.25 3ZM9 9.25C9 10.216 8.2165 11 7.25 11C6.2835 11 5.5 10.216 5.5 9.25C5.5 8.284 6.2835 7.5 7.25 7.5C8.2165 7.5 9 8.284 9 9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.471 2.20733C11.5433 1.79947 11.9325 1.52743 12.3404 1.59971C14.942 2.06076 17 4.16836 17 6.80179C17 7.70758 16.7702 8.54844 16.4255 9.30475C16.2537 9.68166 15.8089 9.84795 15.432 9.67617C15.0551 9.50439 14.8888 9.05958 15.0605 8.68267C15.3361 8.07817 15.5 7.4498 15.5 6.80179C15.5 5.00802 14.0804 3.43144 12.0786 3.07669C11.6708 3.00441 11.3987 2.61519 11.471 2.20733Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pins;
