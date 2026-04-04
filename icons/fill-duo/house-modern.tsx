import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern({
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
          d="M1.97301 8.00503L7 5.8085V16L5 16H3.25C2.28379 16 1.5 15.2162 1.5 14.25V8.70201C1.5 8.39472 1.68745 8.11852 1.97301 8.00503Z"
          fill={fill}
        />
        <path
          d="M7.33022 2.04249C7.5367 1.90303 7.79896 1.87522 8.03009 1.96827L16.5301 5.39027C16.814 5.50457 17 5.77994 17 6.086V14.25C17 15.2162 16.2162 16 15.25 16H7V2.664C7 2.41484 7.12374 2.18194 7.33022 2.04249Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.00002 5.66437L0.470017 8.29223C0.0857518 8.44686 -0.100397 8.88373 0.0542426 9.268C0.208882 9.65226 0.64575 9.83841 1.03001 9.68377L7.00002 7.28127V5.66437Z"
          fill={fill}
        />
        <path
          d="M10 16V13C10 11.8958 10.8958 11 12 11C13.1042 11 14 11.8958 14 13V16H10Z"
          fill={fill}
        />
        <path
          d="M12 9C12.5523 9 13 8.552 13 8C13 7.448 12.5523 7 12 7C11.4477 7 11 7.448 11 8C11 8.552 11.4477 9 12 9Z"
          fill={fill}
        />
        <path
          d="M7.03004 1.56623C6.64578 1.41158 6.20891 1.59771 6.05425 1.98197C5.8996 2.36623 6.08573 2.8031 6.46999 2.95776L16.97 7.18376C17.3542 7.33841 17.7911 7.15228 17.9458 6.76802C18.1004 6.38376 17.9143 5.94689 17.53 5.79223L15.5 4.97519V3.5C15.5 3.08579 15.1642 2.75 14.75 2.75C14.3358 2.75 14 3.08579 14 3.5V4.37148L7.03004 1.56623Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseModern;
