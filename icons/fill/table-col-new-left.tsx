import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewLeft({
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
          d="M2.5 11.5C2.5 11.91 2.836 12.25 3.25 12.25C3.664 12.25 4 11.91 4 11.5V9.75H5.75C6.164 9.75 6.5 9.41 6.5 9C6.5 8.59 6.164 8.25 5.75 8.25H4V6.5C4 6.09 3.664 5.75 3.25 5.75C2.836 5.75 2.5 6.09 2.5 6.5V8.25H0.75C0.336 8.25 0 8.59 0 9C0 9.41 0.336 9.75 0.75 9.75H2.5V11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.2501 2H5.00007C4.15627 2 3.37017 2.3843 2.84477 3.0542C2.58887 3.3799 2.64558 3.85163 2.97178 4.10693C3.29598 4.36373 3.76968 4.30416 4.02448 3.97986C4.26378 3.67466 4.61917 3.49988 5.00007 3.49988H9.00007V14.4999H5.00007C4.61917 14.4999 4.26378 14.3251 4.02448 14.0199C3.76958 13.6947 3.29598 13.6351 2.97178 13.8929C2.64558 14.1483 2.58897 14.62 2.84477 14.9456C3.37017 15.6155 4.15627 15.9998 5.00007 15.9998H13.2501C14.7667 15.9998 16.0001 14.7664 16.0001 13.2498V4.74976C16.0001 3.23316 14.7667 2 13.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColNewLeft;
