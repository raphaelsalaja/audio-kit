import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChevronDown({
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
          d="M12.53 8.53005L9.52999 11.5301C9.38399 11.6761 9.19199 11.75 8.99999 11.75C8.80799 11.75 8.61599 11.6771 8.46999 11.5301L5.46999 8.53005C5.17699 8.23705 5.17699 7.76202 5.46999 7.46902C5.76299 7.17602 6.23799 7.17602 6.53099 7.46902L9.00099 9.93899L11.471 7.46902C11.764 7.17602 12.239 7.17602 12.532 7.46902C12.825 7.76202 12.825 8.23705 12.532 8.53005H12.53Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChevronDown;
