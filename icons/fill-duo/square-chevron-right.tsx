import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChevronRight({
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
          d="M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.53 9.53005L8.52999 12.5301C8.38399 12.6761 8.19199 12.75 7.99999 12.75C7.80799 12.75 7.61599 12.6771 7.46999 12.5301C7.17699 12.2371 7.17699 11.762 7.46999 11.469L9.94 8.99905L7.46999 6.52908C7.17699 6.23608 7.17699 5.76104 7.46999 5.46804C7.76299 5.17504 8.23799 5.17504 8.53099 5.46804L11.531 8.46804C11.824 8.76104 11.824 9.23608 11.531 9.52908L11.53 9.53005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChevronRight;
