import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDownLeft({
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
          d="M14.25 2H10.75C9.7835 2 9 2.7835 9 3.75V7.25C9 8.2165 9.7835 9 10.75 9H14.25C15.2165 9 16 8.2165 16 7.25V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.22 9.71999L3.5 13.44V10.74C3.5 10.326 3.164 9.99001 2.75 9.99001C2.336 9.99001 2 10.326 2 10.74V15.25C2 15.664 2.336 16 2.75 16H7.26001C7.67401 16 8.01001 15.664 8.01001 15.25C8.01001 14.836 7.67401 14.5 7.26001 14.5H4.56L8.28 10.7801C8.573 10.4871 8.573 10.012 8.28 9.71902C7.987 9.42602 7.51199 9.42602 7.21899 9.71902L7.22 9.71999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjDownLeft;
