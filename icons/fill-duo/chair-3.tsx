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
          d="M4.902 3.08982C4.98602 1.91227 5.96585 1 7.1463 1H10.8526C12.0331 1 13.0129 1.91227 13.0969 3.08982L13.497 8.69662C13.5118 8.90427 13.4397 9.10875 13.2978 9.26111C13.1559 9.41347 12.9571 9.5 12.7489 9.5H5.25C5.04182 9.5 4.843 9.41347 4.70112 9.26111C4.55925 9.10875 4.48709 8.90427 4.5019 8.69662L4.902 3.08982Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 11.75C9.75 11.3358 9.41421 11 9 11C8.58579 11 8.25 11.3358 8.25 11.75V14H7C5.75739 14 4.75 15.0074 4.75 16.25C4.75 16.6642 5.08579 17 5.5 17C5.91421 17 6.25 16.6642 6.25 16.25C6.25 15.8358 6.58581 15.5 7 15.5H8.25V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V15.5H11C11.4142 15.5 11.75 15.8358 11.75 16.25C11.75 16.6642 12.0858 17 12.5 17C12.9142 17 13.25 16.6642 13.25 16.25C13.25 15.0074 12.2426 14 11 14H9.75V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 10.25C3 9.00739 4.00739 8 5.25 8H12.75C13.9926 8 15 9.00739 15 10.25C15 11.4926 13.9926 12.5 12.75 12.5H5.25C4.00739 12.5 3 11.4926 3 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 6C2.66421 6 3 6.33579 3 6.75V8.25C3 8.66419 3.33581 9 3.75 9C4.16421 9 4.5 9.33579 4.5 9.75C4.5 10.1642 4.16421 10.5 3.75 10.5C2.50739 10.5 1.5 9.49261 1.5 8.25V6.75C1.5 6.33579 1.83579 6 2.25 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.75 6C16.1642 6 16.5 6.33579 16.5 6.75V8.25C16.5 9.49261 15.4926 10.5 14.25 10.5C13.8358 10.5 13.5 10.1642 13.5 9.75C13.5 9.33579 13.8358 9 14.25 9C14.6642 9 15 8.66419 15 8.25V6.75C15 6.33579 15.3358 6 15.75 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chair3;
