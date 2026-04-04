import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileSend({
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
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V9.37865C15.1256 8.79319 13.9314 8.88665 13.159 9.65901C12.656 10.162 12.4409 10.844 12.5138 11.5H12.25C11.0074 11.5 10 12.5074 10 13.75C10 14.9926 11.0074 16 12.25 16H12.5138C12.4765 16.3357 12.5146 16.6782 12.6281 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.8691 6.00098H12C11.45 6.00098 11 5.55098 11 5.00098V1.13101C11.212 1.21806 11.4068 1.34677 11.572 1.512L15.487 5.427C15.6527 5.59266 15.7818 5.7882 15.8691 6.00098Z"
          fill={fill}
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.2803 10.7197C14.9874 10.4268 14.5126 10.4268 14.2197 10.7197C13.9268 11.0126 13.9268 11.4874 14.2197 11.7803L15.4393 13H12.25C11.8358 13 11.5 13.3358 11.5 13.75C11.5 14.1642 11.8358 14.5 12.25 14.5H15.4393L14.2197 15.7197C13.9268 16.0126 13.9268 16.4874 14.2197 16.7803C14.5126 17.0732 14.9874 17.0732 15.2803 16.7803L17.7803 14.2803C18.0732 13.9874 18.0732 13.5126 17.7803 13.2197L15.2803 10.7197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileSend;
