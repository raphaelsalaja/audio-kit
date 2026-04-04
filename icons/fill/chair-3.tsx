import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair3({
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
          d="M4.50189 8.69662L4.90199 3.08983C4.986 1.91229 5.96583 1 7.14629 1H10.8526C12.033 1 13.0129 1.91227 13.0969 3.08982L13.497 8.69662H4.50189Z"
          fill={fill}
        />
        <path
          d="M2.25 6C2.66421 6 3 6.33579 3 6.75V8.25C3 8.66419 3.33581 9 3.75 9C4.16421 9 4.5 9.33579 4.5 9.75C4.5 10.1642 4.16421 10.5 3.75 10.5C2.50739 10.5 1.5 9.49261 1.5 8.25V6.75C1.5 6.33579 1.83579 6 2.25 6Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 6C16.1642 6 16.5 6.33579 16.5 6.75V8.25C16.5 9.49261 15.4926 10.5 14.25 10.5C13.8358 10.5 13.5 10.1642 13.5 9.75C13.5 9.33579 13.8358 9 14.25 9C14.6642 9 15 8.66419 15 8.25V6.75C15 6.33579 15.3358 6 15.75 6Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 11C9.41421 11 9.75 11.3358 9.75 11.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V11.75C8.25 11.3358 8.58579 11 9 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 10.25C3 9.00739 4.00739 8 5.25 8H12.75C13.9926 8 15 9.00739 15 10.25C15 11.4926 13.9926 12.5 12.75 12.5H5.25C4.00739 12.5 3 11.4926 3 10.25ZM5.25 9.5C4.83581 9.5 4.5 9.83581 4.5 10.25C4.5 10.6642 4.83581 11 5.25 11H12.75C13.1642 11 13.5 10.6642 13.5 10.25C13.5 9.83581 13.1642 9.5 12.75 9.5H5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 15.5C6.58581 15.5 6.25 15.8358 6.25 16.25C6.25 16.6642 5.91421 17 5.5 17C5.08579 17 4.75 16.6642 4.75 16.25C4.75 15.0074 5.75739 14 7 14H11C12.2426 14 13.25 15.0074 13.25 16.25C13.25 16.6642 12.9142 17 12.5 17C12.0858 17 11.75 16.6642 11.75 16.25C11.75 15.8358 11.4142 15.5 11 15.5H7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chair3;
