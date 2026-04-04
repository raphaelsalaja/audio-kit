import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Venus({
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
          d="M9.75 11.25C9.75 10.8358 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.8358 8.25 11.25V13.5H6.75C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15H8.25V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V15H11.25C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5H9.75V11.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M3.5 6.5C3.5 3.46279 5.96279 1 9 1C12.0372 1 14.5 3.46279 14.5 6.5C14.5 9.53721 12.0372 12 9 12C5.96279 12 3.5 9.53721 3.5 6.5ZM9 2.5C6.79121 2.5 5 4.29121 5 6.5C5 8.70879 6.79121 10.5 9 10.5C11.2088 10.5 13 8.70879 13 6.5C13 4.29121 11.2088 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Venus;
