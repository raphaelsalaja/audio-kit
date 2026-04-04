import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ResizeY({
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
          d="M15.25 15H2.75C2.336 15 2 15.336 2 15.75C2 16.164 2.336 16.5 2.75 16.5H15.25C15.664 16.5 16 16.164 16 15.75C16 15.336 15.664 15 15.25 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 1.5H2.75C2.336 1.5 2 1.836 2 2.25C2 2.664 2.336 3 2.75 3H15.25C15.664 3 16 2.664 16 2.25C16 1.836 15.664 1.5 15.25 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.22001 11.2801L8.47001 13.5301C8.61601 13.6761 8.80801 13.75 9.00001 13.75C9.19201 13.75 9.38401 13.6771 9.53001 13.5301L11.78 11.2801C12.073 10.9871 12.073 10.512 11.78 10.219C11.487 9.92602 11.012 9.92602 10.719 10.219L8.99901 11.939L7.27901 10.219C6.98601 9.92602 6.51101 9.92602 6.21801 10.219C5.92501 10.512 5.92501 10.9871 6.21801 11.2801H6.22001Z"
          fill={fill}
        />
        <path
          d="M7.28 7.78005L9 6.06008L10.72 7.78005C10.866 7.92605 11.058 8.00002 11.25 8.00002C11.442 8.00002 11.634 7.92705 11.78 7.78005C12.073 7.48705 12.073 7.01202 11.78 6.71902L9.53 4.46902C9.237 4.17602 8.762 4.17602 8.469 4.46902L6.219 6.71902C5.926 7.01202 5.926 7.48705 6.219 7.78005C6.512 8.07305 6.987 8.07305 7.28 7.78005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ResizeY;
