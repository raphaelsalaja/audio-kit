import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighDefinition({
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
          d="M1 5.75C1 4.23128 2.23069 3 3.75 3H14.25C15.7693 3 17 4.23128 17 5.75V12.25C17 13.7687 15.7693 15 14.25 15H3.75C2.23069 15 1 13.7687 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.50201 6.75C9.50201 6.33579 9.8378 6 10.252 6H12.126C13.4362 6 14.5 7.06379 14.5 8.374V9.626C14.5 10.9362 13.4362 12 12.126 12H10.252C9.8378 12 9.50201 11.6642 9.50201 11.25V6.75ZM11.002 7.5V10.5H12.126C12.6078 10.5 13 10.1078 13 9.626V8.374C13 7.89221 12.6078 7.5 12.126 7.5H11.002Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25351 6C4.66772 6.00028 5.00329 6.33629 5.00301 6.7505L5.00201 8.25H6.99902L7.00002 6.7495C7.0003 6.33529 7.33631 5.99972 7.75052 6C8.16473 6.00028 8.5003 6.33629 8.50002 6.7505L8.49701 11.2505C8.49673 11.6647 8.16072 12.0003 7.74651 12C7.33229 11.9997 6.99673 11.6637 6.99701 11.2495L6.99801 9.75H5.001L5 11.2505C4.99972 11.6647 4.66371 12.0003 4.2495 12C3.83528 11.9997 3.49972 11.6637 3.5 11.2495L3.50301 6.7495C3.50329 6.33529 3.8393 5.99972 4.25351 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HighDefinition;
