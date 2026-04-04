import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilePointer({
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
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V10.1536L11.8946 8.65396C10.9773 8.32162 9.93153 8.55147 9.24109 9.24169C8.54009 9.94245 8.31466 10.9717 8.65455 11.8998L10.5172 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512Z"
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
          d="M13.2 18.0007C12.7693 18.0007 12.3826 17.7321 12.2332 17.3259L10.0633 11.3845C9.92356 11.0036 10.0144 10.5896 10.3016 10.3025C10.5887 10.0163 11.0008 9.92554 11.3836 10.0642L17.324 12.2341C17.7381 12.3855 18.0086 12.7829 17.9998 13.2234C17.99 13.6629 17.7019 14.0486 17.284 14.1824L14.9334 14.9344L14.1805 17.285C14.0477 17.703 13.6619 17.9911 13.2225 18.0008L13.2 18.0007Z"
          fill={fill}
        />
        <path
          d="M8.55434 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9H9.52062C9.42341 9.07249 9.33044 9.15261 9.24257 9.24021L9.24109 9.24169C8.88691 9.59575 8.65414 10.0336 8.55434 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FilePointer;
