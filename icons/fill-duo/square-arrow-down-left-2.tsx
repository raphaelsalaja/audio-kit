import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownLeft2({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7804 4.21975C13.4874 3.92675 13.0128 3.92675 12.7199 4.21975L7.50021 9.43948V6.7499C7.50021 6.3358 7.16431 5.9999 6.75021 5.9999C6.33611 5.9999 6.00021 6.3358 6.00021 6.7499V11.2499C6.00021 11.664 6.33611 11.9999 6.75021 11.9999H11.2502C11.6643 11.9999 12.0002 11.664 12.0002 11.2499C12.0002 10.8358 11.6643 10.4999 11.2502 10.4999H8.56071L13.7804 5.28017C14.0734 4.98717 14.0734 4.51265 13.7804 4.21975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowDownLeft2;
