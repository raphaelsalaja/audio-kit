import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerBottomRight({
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
          d="M15.25 3C14.836 3 14.5 3.336 14.5 3.75V13.25C14.5 13.939 13.939 14.5 13.25 14.5H3.75C3.336 14.5 3 14.836 3 15.25C3 15.664 3.336 16 3.75 16H13.25C14.767 16 16 14.767 16 13.25V3.75C16 3.336 15.664 3 15.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.73999 9.49999C4.32599 9.49999 3.98999 9.83599 3.98999 10.25C3.98999 10.664 4.32599 11 4.73999 11H10.25C10.664 11 11 10.664 11 10.25V4.73998C11 4.32598 10.664 3.99 10.25 3.99C9.83599 3.99 9.49999 4.32598 9.49999 4.73998V8.44L3.27999 2.21999C2.98699 1.92699 2.51199 1.92699 2.21899 2.21999C1.92599 2.51299 1.92599 2.988 2.21899 3.281L8.43899 9.501H4.73899L4.73999 9.49999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerBottomRight;
