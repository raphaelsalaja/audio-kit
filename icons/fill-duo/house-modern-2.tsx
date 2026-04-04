import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern2({
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
          d="M10.75 8C11.1642 8 11.5 8.33579 11.5 8.75V9.25C11.5 9.66421 11.1642 10 10.75 10C10.3358 10 10 9.66421 10 9.25V8.75C10 8.33579 10.3358 8 10.75 8Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 8C13.6642 8 14 8.33579 14 8.75V9.25C14 9.66421 13.6642 10 13.25 10C12.8358 10 12.5 9.66421 12.5 9.25V8.75C12.5 8.33579 12.8358 8 13.25 8Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.75 11C11.1642 11 11.5 11.3358 11.5 11.75V12.25C11.5 12.6642 11.1642 13 10.75 13C10.3358 13 10 12.6642 10 12.25V11.75C10 11.3358 10.3358 11 10.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 11C13.6642 11 14 11.3358 14 11.75V12.25C14 12.6642 13.6642 13 13.25 13C12.8358 13 12.5 12.6642 12.5 12.25V11.75C12.5 11.3358 12.8358 11 13.25 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.03003 1.56623C6.64577 1.41158 6.20889 1.59771 6.05424 1.98197C5.89958 2.36623 6.08571 2.8031 6.46997 2.95776L16.97 7.18376C17.3542 7.33841 17.7911 7.15228 17.9458 6.76802C18.1004 6.38376 17.9143 5.94689 17.53 5.79223L15.5 4.97519V3.5C15.5 3.08579 15.1642 2.75 14.75 2.75C14.3358 2.75 14 3.08579 14 3.5V4.37148L7.03003 1.56623Z"
          fill={fill}
        />
        <path
          d="M7 5.66437L0.470002 8.29223C0.0857365 8.44686 -0.100412 8.88373 0.0542273 9.268C0.208867 9.65226 0.645735 9.83841 1.03 9.68377L7 7.28127V5.66437Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseModern2;
