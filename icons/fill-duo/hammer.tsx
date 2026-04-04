import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hammer({
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
          d="M11.7486 8.20312C11.7237 7.80812 11.3961 7.5 11.0001 7.5H7.00011C6.60411 7.5 6.2765 7.80812 6.2516 8.20312L5.7516 16.2031C5.7389 16.4096 5.8117 16.6128 5.9537 16.7636C6.0953 16.9145 6.29311 16.9999 6.50011 16.9999H11.5001C11.7071 16.9999 11.9049 16.9145 12.0465 16.7636C12.1886 16.6127 12.2613 16.4096 12.2486 16.2031L11.7486 8.20312Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7149 5.91107L11.9649 2.16107C11.8326 2.05657 11.6685 2 11.5001 2H2.75009C1.78529 2 1.00009 2.7852 1.00009 3.75V7.25C1.00009 8.2148 1.78529 9 2.75009 9H16.2501C16.6642 9 17.0001 8.6641 17.0001 8.25V6.5C17.0001 6.2705 16.8951 6.05367 16.7149 5.91107Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Hammer;
