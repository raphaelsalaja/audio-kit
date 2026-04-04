import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Car({
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
          d="M3.5607 4.1296C3.84935 2.88269 4.96011 2 6.23976 2H11.7603C13.04 2 14.1506 2.88291 14.4393 4.12957L15.1189 7.0642L15.9 7.65C16.5924 8.16934 17 8.98445 17 9.85001V14.25C17 15.2165 16.2165 16 15.25 16H14.75C13.7835 16 13 15.2165 13 14.25V14H5V14.25C5 15.2165 4.21651 16 3.25 16H2.75006C1.78355 16 1.00006 15.2165 1.00006 14.25V9.85001C1.00006 8.98445 1.4076 8.16934 2.10006 7.65L2.88113 7.0642L3.5607 4.1296Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.99805 11C4.55033 11 4.99805 10.5523 4.99805 10C4.99805 9.44772 4.55033 9 3.99805 9C3.44577 9 2.99805 9.44772 2.99805 10C2.99805 10.5523 3.44577 11 3.99805 11Z"
          fill={fill}
        />
        <path
          d="M14.0436 11C14.5959 11 15.0436 10.5523 15.0436 10C15.0436 9.44772 14.5959 9 14.0436 9C13.4913 9 13.0436 9.44772 13.0436 10C13.0436 10.5523 13.4913 11 14.0436 11Z"
          fill={fill}
        />
        <path
          d="M13.5 7L12.9393 4.0806C12.8607 3.7408 12.558 3.5 12.2088 3.5H5.7915C5.4424 3.5 5.1396 3.7407 5.061 4.0806L4.5 7H13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Car;
