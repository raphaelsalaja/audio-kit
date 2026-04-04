import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRows2({
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
          d="M16.5 4.75C16.5 3.23 15.267 2 13.75 2H4.25C2.733 2 1.5 3.23 1.5 4.75V6.5H16.5V4.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.5 13.25C1.5 14.77 2.733 16 4.25 16H13.75C15.267 16 16.5 14.77 16.5 13.25V11.5H1.5V13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path d="M16.5 6.5H1.5V11.5H16.5V6.5Z" fill={fill} />
      </g>
    </svg>
  );
}

export default TableRows2;
