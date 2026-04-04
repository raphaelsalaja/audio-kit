import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileLock({
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
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V8.93271C15.4775 8.65644 14.882 8.5 14.25 8.5C12.2612 8.5 10.6333 10.0493 10.5078 12.0064C9.60133 12.583 9 13.5957 9 14.75V16.25C9 16.5081 9.03011 16.7592 9.087 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512Z"
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
          d="M13.5 12.25C13.5 11.8362 13.8362 11.5 14.25 11.5C14.6638 11.5 15 11.8362 15 12.25V13H13.5V12.25ZM12 13.0177V12.25C12 11.0078 13.0078 10 14.25 10C15.4922 10 16.5 11.0078 16.5 12.25V13.0177C17.3479 13.1391 18 13.8687 18 14.75V16.25C18 17.2162 17.2162 18 16.25 18H12.25C11.2838 18 10.5 17.2162 10.5 16.25V14.75C10.5 13.8687 11.1521 13.1391 12 13.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileLock;
