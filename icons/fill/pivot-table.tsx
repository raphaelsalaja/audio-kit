import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PivotTable({
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
          d="M17.03 10.47L15.28 8.71999C14.987 8.42699 14.512 8.42699 14.219 8.71999L12.469 10.47C12.176 10.763 12.176 11.238 12.469 11.531C12.762 11.824 13.237 11.824 13.53 11.531L14 11.061V12.75C14 13.439 13.439 14 12.75 14H11.061L11.531 13.5301C11.824 13.2371 11.824 12.762 11.531 12.469C11.238 12.176 10.763 12.176 10.47 12.469L8.71999 14.219C8.42699 14.512 8.42699 14.9871 8.71999 15.2801L10.47 17.0301C10.616 17.1761 10.808 17.25 11 17.25C11.192 17.25 11.384 17.1771 11.53 17.0301C11.823 16.7371 11.823 16.262 11.53 15.969L11.06 15.499H12.749C14.266 15.499 15.499 14.266 15.499 12.749V11.06L15.969 11.5301C16.115 11.6761 16.307 11.75 16.499 11.75C16.691 11.75 16.883 11.6771 17.029 11.5301C17.322 11.2371 17.322 10.762 17.029 10.469L17.03 10.47Z"
          fill={secondaryfill}
        />
        <path
          d="M6.5 8H3.5V6.5H6.5V3.5H8V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H4.75C3.2312 2 2 3.2312 2 4.75V13.25C2 14.7688 3.2312 16 4.75 16H5.75C6.1642 16 6.5 15.6642 6.5 15.25V8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PivotTable;
