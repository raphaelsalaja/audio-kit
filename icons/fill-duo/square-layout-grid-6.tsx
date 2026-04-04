import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLayoutGrid6({
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
          d="M13.2501 2H4.75006C3.23128 2 2.00006 3.23122 2.00006 4.75V13.25C2.00006 14.7688 3.23128 16 4.75006 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.0001 2H12.5001V5.5H16.0001V7H12.5001V11H16.0001V12.5H12.5001V16H11.0001V12.5H7.00006V16H5.50006V12.5H2.00006V11H5.50006V7H2.00006V5.5H5.50006V2H7.00006V5.5H11.0001V2ZM11.0001 7H7.00006V11H11.0001V7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareLayoutGrid6;
