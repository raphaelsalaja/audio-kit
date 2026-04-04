import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies({
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
          d="M14.25 7.5H3.75C2.784 7.5 2 8.284 2 9.25V14.25C2 15.216 2.784 16 3.75 16H14.25C15.216 16 16 15.216 16 14.25V9.25C16 8.284 15.216 7.5 14.25 7.5Z"
          fill={fill}
        />
        <path
          d="M3.25 7C3.664 7 4 6.664 4 6.25C4 6.112 4.112 6 4.25 6H13.75C13.888 6 14 6.112 14 6.25C14 6.664 14.336 7 14.75 7C15.164 7 15.5 6.664 15.5 6.25C15.5 5.285 14.715 4.5 13.75 4.5H4.25C3.285 4.5 2.5 5.285 2.5 6.25C2.5 6.664 2.836 7 3.25 7Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 4C4.164 4 4.5 3.664 4.5 3.25C4.5 3.112 4.612 3 4.75 3H13.25C13.388 3 13.5 3.112 13.5 3.25C13.5 3.664 13.836 4 14.25 4C14.664 4 15 3.664 15 3.25C15 2.285 14.215 1.5 13.25 1.5H4.75C3.785 1.5 3 2.285 3 3.25C3 3.664 3.336 4 3.75 4Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Copies;
