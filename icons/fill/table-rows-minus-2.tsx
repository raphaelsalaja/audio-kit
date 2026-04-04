import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsMinus2({
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
          d="M17.25 13.5H12.25C11.836 13.5 11.5 13.84 11.5 14.25C11.5 14.66 11.836 15 12.25 15H17.25C17.664 15 18 14.66 18 14.25C18 13.84 17.664 13.5 17.25 13.5Z"
          fill={secondaryfill}
        />
        <path d="M16.5 7.25H1.5V10.75H16.5V7.25Z" fill={fill} />
        <path
          d="M16.5 5.75V4.75C16.5 3.23 15.267 2 13.75 2H4.25C2.733 2 1.5 3.23 1.5 4.75V5.75H16.5Z"
          fill={fill}
        />
        <path
          d="M10 14.25C10 13.374 10.5085 12.6216 11.241 12.25H1.5V13.25C1.5 14.77 2.733 16 4.25 16H10.8535C10.3376 15.5874 10 14.9604 10 14.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowsMinus2;
