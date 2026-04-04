import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive3({
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
          d="M15.85 4.8L13.6 1.8C13.458 1.612 13.236 1.5 13 1.5H5.00002C4.76402 1.5 4.54202 1.611 4.40002 1.8L2.15002 4.8C1.90102 5.132 1.96902 5.602 2.30002 5.85C2.63302 6.099 3.10202 6.032 3.35002 5.7L5.37502 3H8.25002V5.25C8.25002 5.664 8.58602 6 9.00002 6C9.41402 6 9.75002 5.664 9.75002 5.25V3H12.625L14.65 5.7C14.797 5.896 15.023 6 15.251 6C15.408 6 15.565 5.951 15.701 5.85C16.032 5.601 16.098 5.131 15.85 4.8Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 16.5H13.25C14.767 16.5 16 15.267 16 13.75V5.25C16 4.836 15.664 4.5 15.25 4.5H2.75C2.336 4.5 2 4.836 2 5.25V13.75C2 15.267 3.233 16.5 4.75 16.5ZM7 7.5C6.58579 7.5 6.25 7.83579 6.25 8.25C6.25 8.66421 6.58579 9 7 9H11C11.4142 9 11.75 8.66421 11.75 8.25C11.75 7.83579 11.4142 7.5 11 7.5H7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchive3;
