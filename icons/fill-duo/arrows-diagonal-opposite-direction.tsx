import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsDiagonalOppositeDirection({
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
          d="M14.72 6.71999L7.5 13.94V11.24C7.5 10.826 7.164 10.49 6.75 10.49C6.336 10.49 6 10.826 6 11.24V15.75C6 16.164 6.336 16.5 6.75 16.5H11.26C11.674 16.5 12.01 16.164 12.01 15.75C12.01 15.336 11.674 15 11.26 15H8.56L15.78 7.77999C16.073 7.48699 16.073 7.01199 15.78 6.71899C15.487 6.42599 15.012 6.42599 14.719 6.71899L14.72 6.71999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.5 6.76001C10.5 7.17401 10.836 7.51001 11.25 7.51001C11.664 7.51001 12 7.17401 12 6.76001V2.25C12 1.836 11.664 1.5 11.25 1.5H6.73999C6.32599 1.5 5.98999 1.836 5.98999 2.25C5.98999 2.664 6.32599 3 6.73999 3H9.44L2.21999 10.22C1.92699 10.513 1.92699 10.988 2.21999 11.281C2.36599 11.427 2.55799 11.501 2.74999 11.501C2.94199 11.501 3.13399 11.428 3.27999 11.281L10.5 4.061V6.76001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsDiagonalOppositeDirection;
