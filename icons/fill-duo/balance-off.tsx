import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BalanceOff({
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
          d="M16.8698 6.31002C16.9443 6.71747 16.6745 7.10821 16.267 7.18276L2.00304 9.79276C1.59559 9.86732 1.20485 9.59745 1.1303 9.19C1.05575 8.78255 1.32561 8.39181 1.73306 8.31726L15.997 5.70726C16.4045 5.6327 16.7952 5.90257 16.8698 6.31002Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.86453 10.1549C8.36923 9.28103 9.62973 9.28103 10.1344 10.1549L12.9515 15.0329C13.4567 15.9078 12.8243 16.999 11.816 16.999H6.18299C5.17474 16.999 4.54218 15.9079 5.0475 15.0329L7.86453 10.1549Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 4C1 2.34327 2.3427 1 4 1C5.6573 1 7 2.34327 7 4C7 5.65673 5.6573 7 4 7C2.3427 7 1 5.65673 1 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.5 2.75C12.5 1.50726 13.5079 0.5 14.75 0.5C15.9921 0.5 17 1.50726 17 2.75C17 3.99274 15.9921 5 14.75 5C13.5079 5 12.5 3.99274 12.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BalanceOff;
