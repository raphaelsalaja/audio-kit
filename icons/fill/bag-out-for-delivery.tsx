import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagOutForDelivery({
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
          d="M1.00266 8.75C1.00266 8.33579 1.33844 8 1.75266 8H7.75266C8.16687 8 8.50266 8.33579 8.50266 8.75C8.50266 9.16421 8.16687 9.5 7.75266 9.5H1.75266C1.33844 9.5 1.00266 9.16421 1.00266 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.00265503 11.75C0.00265503 11.3358 0.338441 11 0.752655 11H6.75266C7.16687 11 7.50266 11.3358 7.50266 11.75C7.50266 12.1642 7.16687 12.5 6.75266 12.5H0.752655C0.338441 12.5 0.00265503 12.1642 0.00265503 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.667 4C15.104 4 16.28 5.08 16.405 6.512L17.057 14.012C17.124 14.778 16.864 15.542 16.345 16.109C15.826 16.676 15.087 17.001 14.318 17.001H5.68101C4.91201 17.001 4.17301 16.676 3.65401 16.109C3.13501 15.542 2.87501 14.778 2.94201 14.012L3.20385 11H6.75267C7.16688 11 7.50267 10.6642 7.50267 10.25C7.50267 9.83579 7.16688 9.5 6.75267 9.5H3.33425L3.59401 6.512C3.71801 5.08 4.89601 4 6.33301 4H7.00001V3C7.00001 1.346 8.34601 0 10 0C11.654 0 13 1.346 13 3V4H13.667ZM8.50001 4H11.5V3C11.5 2.173 10.827 1.5 10 1.5C9.17301 1.5 8.50001 2.173 8.50001 3V4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BagOutForDelivery;
