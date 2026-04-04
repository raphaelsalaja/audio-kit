import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BankStatement({
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
        <path d="M8 7.5V9.5H10V7.5H8Z" fill={fill} />
        <path
          d="M4.75 1C3.23119 1 2 2.23119 2 3.75V14.25C2 15.7688 3.23119 17 4.75 17H13.25C14.7688 17 16 15.7688 16 14.25V3.75C16 2.23119 14.7688 1 13.25 1H4.75ZM5.75 9.5C5.33579 9.5 5 9.83579 5 10.25C5 10.6642 5.33579 11 5.75 11H12.25C12.6642 11 13 10.6642 13 10.25C13 9.83579 12.6642 9.5 12.25 9.5H11.5V7.5H12.25C12.6642 7.5 13 7.16421 13 6.75V6.5C13 6.23955 12.8649 5.99776 12.6431 5.86126L9.39307 3.86126C9.15202 3.71291 8.84798 3.71291 8.60693 3.86126L5.35693 5.86126C5.13512 5.99776 5 6.23955 5 6.5V6.75C5 7.16421 5.33579 7.5 5.75 7.5H6.5V9.5H5.75ZM5 13.25C5 12.8358 5.33579 12.5 5.75 12.5H12.25C12.6642 12.5 13 12.8358 13 13.25C13 13.6642 12.6642 14 12.25 14H5.75C5.33579 14 5 13.6642 5 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BankStatement;
