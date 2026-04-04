import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeClock({
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
          d="M14 10C11.794 10 10 11.794 10 14C10 16.206 11.794 18 14 18C16.206 18 18 16.206 18 14C18 11.794 16.206 10 14 10ZM16.312 14.95C16.193 15.24 15.914 15.415 15.619 15.415C15.523 15.415 15.428 15.397 15.334 15.359L13.715 14.694C13.434 14.578 13.25 14.304 13.25 14V12.25C13.25 11.836 13.586 11.5 14 11.5C14.414 11.5 14.75 11.836 14.75 12.25V13.497L15.904 13.971C16.287 14.128 16.47 14.567 16.312 14.95Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H7.79638C8.21059 15.5 8.54638 15.1642 8.54638 14.75C8.54638 14.3358 8.21059 14 7.79638 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V8.16752C15.5 8.58152 15.836 8.91752 16.25 8.91752C16.664 8.91752 17 8.58152 17 8.16752V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeClock;
