import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardClock({
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
          d="M2.5 4.75C2.5 3.23079 3.73079 2 5.25 2H12.75C14.2692 2 15.5 3.23079 15.5 4.75V8.78499C14.9501 8.60018 14.3616 8.5 13.75 8.5C10.7154 8.5 8.25 10.9661 8.25 14C8.25 15.1061 8.57772 16.1368 9.14126 17H5.25C3.73079 17 2.5 15.7692 2.5 14.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 2.25C5.5 1.28379 6.28379 0.5 7.25 0.5H10.75C11.7162 0.5 12.5 1.28379 12.5 2.25C12.5 3.21621 11.7162 4 10.75 4H7.25C6.28379 4 5.5 3.21621 5.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 11.75C5.5 11.3358 5.83579 11 6.25 11H6.9191C7.33331 11 7.6691 11.3358 7.6691 11.75C7.6691 12.1642 7.33331 12.5 6.9191 12.5H6.25C5.83579 12.5 5.5 12.1642 5.5 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 8.75C5.5 8.33579 5.83579 8 6.25 8H9.3621C9.77631 8 10.1121 8.33579 10.1121 8.75C10.1121 9.16421 9.77631 9.5 9.3621 9.5H6.25C5.83579 9.5 5.5 9.16421 5.5 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 10C11.5439 10 9.75 11.7944 9.75 14C9.75 16.2056 11.5439 18 13.75 18C15.9561 18 17.75 16.2056 17.75 14C17.75 11.7944 15.9561 10 13.75 10ZM16.0625 14.9502C15.9434 15.2398 15.6641 15.415 15.3691 15.415C15.2734 15.415 15.1777 15.3969 15.0839 15.3588L13.4648 14.6938C13.1836 14.5781 13 14.3042 13 14V12.25C13 11.8359 13.3359 11.5 13.75 11.5C14.1641 11.5 14.5 11.8359 14.5 12.25V13.4971L15.6543 13.9712C16.0371 14.1284 16.2207 14.5669 16.0625 14.9502Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClipboardClock;
