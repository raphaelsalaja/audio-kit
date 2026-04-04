import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive2Download({
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
          d="M4.75 16.5C3.233 16.5 2 15.267 2 13.75V5.25C2 4.836 2.336 4.5 2.75 4.5H15.25C15.664 4.5 16 4.836 16 5.25V13.75C16 15.267 14.767 16.5 13.25 16.5H4.75ZM6.21967 9.96967C6.51256 9.67678 6.98744 9.67678 7.28033 9.96967L8.25 10.9393V8.25C8.25 7.83579 8.58579 7.5 9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V10.9393L10.7197 9.96967C11.0126 9.67678 11.4874 9.67678 11.7803 9.96967C12.0732 10.2626 12.0732 10.7374 11.7803 11.0303L9.53033 13.2803C9.38388 13.4268 9.19194 13.5 9 13.5C8.89831 13.5 8.80134 13.4798 8.71291 13.4431C8.62445 13.4065 8.54158 13.3522 8.46967 13.2803L6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchive2Download;
