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
          d="M5.5 2H4.25C2.733 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.733 16 4.25 16H5.5V2Z"
          fill={fill}
        />
        <path
          d="M10 14.75C10 13.97 10.398 13.28 11 12.88V2H7V16H10.381C10.141 15.64 10 15.21 10 14.75Z"
          fill={fill}
        />
        <path
          d="M16.5 12.5V4.75C16.5 3.23 15.267 2 13.75 2H12.5V12.5H16.5Z"
          fill={fill}
        />
        <path
          d="M17.25 14H12.25C11.836 14 11.5 14.34 11.5 14.75C11.5 15.16 11.836 15.5 12.25 15.5H17.25C17.664 15.5 18 15.16 18 14.75C18 14.34 17.664 14 17.25 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableColsMinus2;
