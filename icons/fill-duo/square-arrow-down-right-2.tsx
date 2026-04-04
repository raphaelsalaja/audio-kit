import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownRight2({
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
          d="M4.21981 4.21975C4.51281 3.92675 4.98741 3.92675 5.28031 4.21975L10.5 9.43948V6.7499C10.5 6.3358 10.8359 5.9999 11.25 5.9999C11.6641 5.9999 12 6.3358 12 6.7499V11.2499C12 11.664 11.6641 11.9999 11.25 11.9999H6.75001C6.33591 11.9999 6.00001 11.664 6.00001 11.2499C6.00001 10.8358 6.33591 10.4999 6.75001 10.4999H9.43951L4.21981 5.28017C3.92681 4.98717 3.92681 4.51265 4.21981 4.21975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowDownRight2;
