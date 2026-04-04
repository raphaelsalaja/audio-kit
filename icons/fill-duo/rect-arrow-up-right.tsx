import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowUpRight({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.5 8.75C14.5 9.164 14.164 9.5 13.75 9.5C13.336 9.5 13 9.164 13 8.75V7.06104L9.77999 10.281C9.63399 10.427 9.44199 10.501 9.24999 10.501C9.05799 10.501 8.86599 10.428 8.71999 10.281C8.42699 9.98801 8.42699 9.51297 8.71999 9.21997L11.94 6H10.251C9.837 6 9.501 5.664 9.501 5.25C9.501 4.836 9.837 4.5 10.251 4.5H13.751C14.165 4.5 14.501 4.836 14.501 5.25V8.75H14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectArrowUpRight;
