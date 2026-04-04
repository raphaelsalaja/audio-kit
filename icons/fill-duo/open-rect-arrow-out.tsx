import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenRectArrowOut({
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
          d="M13.25 2H9.75C9.336 2 9 2.336 9 2.75C9 3.164 9.336 3.5 9.75 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H9.75C9.336 14.5 9 14.836 9 15.25C9 15.664 9.336 16 9.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.561 9.75002H10.25C10.664 9.75002 11 9.41402 11 9.00002C11 8.58602 10.664 8.25002 10.25 8.25002H4.561L6.781 6.03005C7.074 5.73705 7.074 5.26202 6.781 4.96902C6.488 4.67602 6.01299 4.67602 5.71999 4.96902L2.21999 8.46902C1.92699 8.76202 1.92699 9.23705 2.21999 9.53005L5.71999 13.0301C5.86599 13.1761 6.05799 13.25 6.24999 13.25C6.44199 13.25 6.63399 13.1771 6.77999 13.0301C7.07299 12.7371 7.07299 12.262 6.77999 11.969L4.55999 9.74905L4.561 9.75002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenRectArrowOut;
