import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BalanceOff2({
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
          d="M1.1303 6.31002C1.20485 5.90257 1.59559 5.6327 2.00304 5.70726L16.267 8.31726C16.6745 8.39181 16.9443 8.78255 16.8698 9.19C16.7952 9.59745 16.4045 9.86732 15.997 9.79276L1.73306 7.18276C1.32561 7.10821 1.05575 6.71747 1.1303 6.31002Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.1074 10.11C9.58606 9.2813 8.36044 9.29625 7.86453 10.1549L5.04751 15.0329C4.54219 15.9079 5.17474 16.999 6.18299 16.999H11.817C12.8253 16.999 13.4578 15.9079 12.9525 15.0329L10.1355 10.1549C10.1266 10.1396 10.1172 10.1246 10.1074 10.11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 4C11 2.34327 12.3427 1 14 1C15.6573 1 17 2.34327 17 4C17 5.65673 15.6573 7 14 7C12.3427 7 11 5.65673 11 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 1.50726 2.00792 0.5 3.25 0.5C4.49208 0.5 5.5 1.50726 5.5 2.75C5.5 3.99274 4.49208 5 3.25 5C2.00792 5 1 3.99274 1 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BalanceOff2;
