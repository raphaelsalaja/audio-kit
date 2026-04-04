import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseGrin({
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
          d="M10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287L10.0591 1.36312Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 11C7.052 11 7.5 10.5523 7.5 10C7.5 9.4477 7.052 9 6.5 9C5.948 9 5.5 9.4477 5.5 10C5.5 10.5523 5.948 11 6.5 11Z"
          fill={fill}
        />
        <path
          d="M11.5 11C12.052 11 12.5 10.5523 12.5 10C12.5 9.4477 12.052 9 11.5 9C10.948 9 10.5 9.4477 10.5 10C10.5 10.5523 10.948 11 11.5 11Z"
          fill={fill}
        />
        <path
          d="M7.83331 11.5H10.1666C10.4886 11.5 10.7499 11.7613 10.7499 12.0833C10.7499 13.0493 9.96591 13.8333 8.99991 13.8333C8.03391 13.8333 7.24991 13.0493 7.24991 12.0833C7.24991 11.7613 7.51131 11.5 7.83331 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseGrin;
