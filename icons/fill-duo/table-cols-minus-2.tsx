import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColsMinus2({
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
          d="M4.25 2C2.7334 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.7334 16 4.25 16H6.5V2H4.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10 14.75C10 13.7734 10.6291 12.9487 11.5 12.6382V2H6.5V16H10.381C10.1408 15.6421 10 15.2124 10 14.75Z"
          fill={fill}
        />
        <path
          d="M12.25 12.5H16.5V4.75C16.5 3.23 15.2666 2 13.75 2H11.5V12.6382C11.7358 12.5542 11.9858 12.5 12.25 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.25 15.5H12.25C11.836 15.5 11.5 15.16 11.5 14.75C11.5 14.34 11.836 14 12.25 14H17.25C17.664 14 18 14.34 18 14.75C18 15.16 17.664 15.5 17.25 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColsMinus2;
