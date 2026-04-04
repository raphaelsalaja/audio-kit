import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NotebookClock({
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
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.75C4.16421 8.25 4.5 8.58579 4.5 9C4.5 9.41421 4.16421 9.75 3.75 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 5.75C1 5.33579 1.33579 5 1.75 5H3.75C4.16421 5 4.5 5.33579 4.5 5.75C4.5 6.16421 4.16421 6.5 3.75 6.5H1.75C1.33579 6.5 1 6.16421 1 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H3.75C4.16421 11.5 4.5 11.8358 4.5 12.25C4.5 12.6642 4.16421 13 3.75 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.5 3.75C2.5 2.23079 3.73079 1 5.25 1H12.75C14.2692 1 15.5 2.23079 15.5 3.75V7.78499C14.9501 7.60018 14.3616 7.5 13.75 7.5C10.7154 7.5 8.25 9.96609 8.25 13C8.25 14.5748 8.91426 15.9966 9.97759 17H5.25C3.73079 17 2.5 15.7692 2.5 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.75 9C11.5439 9 9.75 10.7944 9.75 13C9.75 15.2056 11.5439 17 13.75 17C15.9561 17 17.75 15.2056 17.75 13C17.75 10.7944 15.9561 9 13.75 9ZM16.0625 13.9502C15.9434 14.2398 15.6641 14.415 15.3691 14.415C15.2734 14.415 15.1777 14.3969 15.0839 14.3588L13.4648 13.6938C13.1836 13.5781 13 13.3042 13 13V11.25C13 10.8359 13.3359 10.5 13.75 10.5C14.1641 10.5 14.5 10.8359 14.5 11.25V12.4971L15.6543 12.9712C16.0371 13.1284 16.2207 13.5669 16.0625 13.9502Z"
          fill={fill}
        />
        <path
          d="M5.25 17H6V1H5.25C3.73128 1 2.5 2.23069 2.5 3.75V14.25C2.5 15.7693 3.73128 17 5.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default NotebookClock;
