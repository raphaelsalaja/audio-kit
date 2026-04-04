import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewRight2({
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
          d="M16.2501 8.25H14.5001V6.5C14.5001 6.0859 14.1642 5.75 13.7501 5.75C13.336 5.75 13.0001 6.0859 13.0001 6.5V8.25H11.2501C10.836 8.25 10.5001 8.5859 10.5001 9C10.5001 9.4141 10.836 9.75 11.2501 9.75H13.0001V11.5C13.0001 11.9141 13.336 12.25 13.7501 12.25C14.1642 12.25 14.5001 11.9141 14.5001 11.5V9.75H16.2501C16.6642 9.75 17.0001 9.4141 17.0001 9C17.0001 8.5859 16.6642 8.25 16.2501 8.25Z"
          fill={fill}
        />
        <path
          d="M6.75009 1H5.25009C4.00745 1 3.00009 2.00736 3.00009 3.25V14.75C3.00009 15.9926 4.00745 17 5.25009 17H6.75009C7.99273 17 9.00009 15.9926 9.00009 14.75V3.25C9.00009 2.00736 7.99273 1 6.75009 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableColNewRight2;
