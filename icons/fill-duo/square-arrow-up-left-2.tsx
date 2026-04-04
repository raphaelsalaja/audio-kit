import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpLeft2({
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
          d="M13.7804 13.7803C13.4874 14.0733 13.0128 14.0733 12.7199 13.7803L7.50018 8.56055V11.2501C7.50018 11.6642 7.16428 12.0001 6.75018 12.0001C6.33608 12.0001 6.00018 11.6642 6.00018 11.2501V6.75012C6.00018 6.33602 6.33608 6.00012 6.75018 6.00012H11.2502C11.6643 6.00012 12.0002 6.33602 12.0002 6.75012C12.0002 7.16422 11.6643 7.50012 11.2502 7.50012H8.56068L13.7804 12.7198C14.0734 13.0128 14.0734 13.4874 13.7804 13.7803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpLeft2;
