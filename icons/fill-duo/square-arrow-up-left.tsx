import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpLeft({
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
          d="M12.28 12.28C12.134 12.426 11.942 12.5 11.75 12.5C11.558 12.5 11.366 12.427 11.22 12.28L7 8.06006V9.74902C7 10.163 6.664 10.499 6.25 10.499C5.836 10.499 5.5 10.163 5.5 9.74902V6.24902C5.5 5.83502 5.836 5.49902 6.25 5.49902H9.75C10.164 5.49902 10.5 5.83502 10.5 6.24902C10.5 6.66302 10.164 6.99902 9.75 6.99902H8.061L12.281 11.219C12.574 11.512 12.574 11.987 12.281 12.28H12.28Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpLeft;
