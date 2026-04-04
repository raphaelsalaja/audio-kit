import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpRight2({
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
          d="M4.21981 13.7803C4.51281 14.0733 4.9874 14.0733 5.2803 13.7803L10.5 8.56055V11.2501C10.5 11.6642 10.8359 12.0001 11.25 12.0001C11.6641 12.0001 12 11.6642 12 11.2501V6.75012C12 6.33602 11.6641 6.00012 11.25 6.00012H6.75001C6.33591 6.00012 6.00001 6.33602 6.00001 6.75012C6.00001 7.16422 6.33591 7.50012 6.75001 7.50012H9.43951L4.21981 12.7198C3.92681 13.0128 3.92681 13.4874 4.21981 13.7803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpRight2;
