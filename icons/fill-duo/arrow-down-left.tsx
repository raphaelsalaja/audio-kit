import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDownLeft({
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
          d="M3.99999 14.75C3.80799 14.75 3.61599 14.677 3.46999 14.53C3.17699 14.237 3.17699 13.762 3.46999 13.469L13.72 3.21999C14.013 2.92699 14.488 2.92699 14.781 3.21999C15.074 3.51299 15.074 3.98799 14.781 4.28099L4.52999 14.53C4.38399 14.676 4.19199 14.75 3.99999 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.76099 15H3.75C3.336 15 3 14.664 3 14.25V8.23999C3 7.82599 3.336 7.48999 3.75 7.48999C4.164 7.48999 4.5 7.82599 4.5 8.23999V13.5H9.76099C10.175 13.5 10.511 13.836 10.511 14.25C10.511 14.664 10.175 15 9.76099 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDownLeft;
