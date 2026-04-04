import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Highlighter({
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
          d="M4.90001 8.47601C5.03805 7.63588 5.75573 7 6.62702 7H11.375C12.2477 7 12.9628 7.63717 13.1019 8.47519C13.2073 9.11209 13.3804 9.83688 13.6627 10.6111C14.2795 12.3008 15.1628 13.525 15.8204 14.2918C16.09 14.6062 16.0537 15.0797 15.7392 15.3493L2.26316 15.3496C1.94887 15.0801 1.91204 14.6066 2.18138 14.2921C2.83931 13.5239 3.72257 12.3006 4.33938 10.6111L4.90001 8.47601Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.435 1.21502C11.081 0.985015 10.641 0.951015 10.255 1.12202L6.737 2.68502C6.289 2.88402 6 3.33001 6 3.81902V4.75002C6 5.16401 6.336 5.50002 6.75 5.50002H11.25C11.664 5.50002 12 5.16401 12 4.75002V2.25602C12 1.83402 11.789 1.44502 11.435 1.21502Z"
          fill={fill}
        />
        <path
          d="M1.89778 15.467C1.76677 14.4216 2.58262 13.5 3.63401 13.5H14.368C15.4195 13.5 16.2354 14.4218 16.1042 15.4672L15.9953 16.3426C15.9485 16.7181 15.6294 17 15.251 17H2.75101C2.37261 17 2.05348 16.7181 2.00675 16.3426L1.89778 15.467Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Highlighter;
