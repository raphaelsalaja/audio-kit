import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertInfo({
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
          d="M9 16C8.5859 16 8.25 15.6641 8.25 15.25V7.5H6.75C6.3359 7.5 6 7.1641 6 6.75C6 6.3359 6.3359 6 6.75 6H8.5C9.1895 6 9.75 6.5605 9.75 7.25V15.25C9.75 15.6641 9.4141 16 9 16Z"
          fill={fill}
        />
        <path
          d="M9 2C8.449 2 8 2.449 8 3C8 3.551 8.449 4 9 4C9.551 4 10 3.551 10 3C10 2.449 9.551 2 9 2Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default AlertInfo;
