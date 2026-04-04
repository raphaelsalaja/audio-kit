import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowUpRight({
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
          d="M12.5 9.75C12.5 10.164 12.164 10.5 11.75 10.5C11.336 10.5 11 10.164 11 9.75V8.06104L6.77999 12.281C6.63399 12.427 6.44199 12.501 6.24999 12.501C6.05799 12.501 5.86599 12.428 5.71999 12.281C5.42699 11.988 5.42699 11.513 5.71999 11.22L9.94 7H8.251C7.837 7 7.501 6.664 7.501 6.25C7.501 5.836 7.837 5.5 8.251 5.5H11.751C12.165 5.5 12.501 5.836 12.501 6.25V9.75H12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareArrowUpRight;
