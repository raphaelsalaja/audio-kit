import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChevronUp({
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
          d="M12.53 10.5301C12.384 10.6761 12.192 10.75 12 10.75C11.808 10.75 11.616 10.6771 11.47 10.5301L8.99999 8.06008L6.52999 10.5301C6.23699 10.8231 5.76199 10.8231 5.46899 10.5301C5.17599 10.2371 5.17599 9.76202 5.46899 9.46902L8.46899 6.46902C8.76199 6.17602 9.23699 6.17602 9.52999 6.46902L12.53 9.46902C12.823 9.76202 12.823 10.2371 12.53 10.5301Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChevronUp;
