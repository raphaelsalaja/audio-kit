import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewRight({
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
          d="M4.75009 2C3.23349 2 2.00009 3.2334 2.00009 4.75V13.25C2.00009 14.7666 3.23349 16 4.75009 16H9.00009V2H4.75009Z"
          fill={fill}
        />
        <path
          d="M14.7501 13.75C13.5094 13.75 12.5001 12.7407 12.5001 11.5V11.25H12.2501C11.0094 11.25 10.0001 10.2407 10.0001 9C10.0001 7.7593 11.0094 6.75 12.2501 6.75H12.5001V6.5C12.5001 5.2593 13.5094 4.25 14.7501 4.25C15.2073 4.25 15.6319 4.38872 15.9873 4.62402C15.9198 3.16702 14.7235 2 13.2501 2H9.00009V16H13.2501C14.7235 16 15.9198 14.833 15.9873 13.376C15.6319 13.6114 15.2073 13.75 14.7501 13.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.2501 8.25H15.5001V6.5C15.5001 6.0859 15.1642 5.75 14.7501 5.75C14.336 5.75 14.0001 6.0859 14.0001 6.5V8.25H12.2501C11.836 8.25 11.5001 8.5859 11.5001 9C11.5001 9.4141 11.836 9.75 12.2501 9.75H14.0001V11.5C14.0001 11.9141 14.336 12.25 14.7501 12.25C15.1642 12.25 15.5001 11.9141 15.5001 11.5V9.75H17.2501C17.6642 9.75 18.0001 9.4141 18.0001 9C18.0001 8.5859 17.6642 8.25 17.2501 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColNewRight;
