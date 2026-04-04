import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeBan({
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
          d="M14 10C11.7939 10 10 11.7944 10 14C10 15.0974 10.4451 16.092 11.1631 16.8154C11.8999 17.5715 12.9472 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM14 11.5C14.4157 11.5 14.8021 11.6116 15.1473 11.7917L11.7921 15.1477C11.6117 14.8022 11.5 14.4158 11.5 14C11.5 12.6216 12.6211 11.5 14 11.5ZM14 16.5C13.5843 16.5 13.1979 16.3884 12.8527 16.2083L16.2079 12.8523C16.3883 13.1978 16.5 13.5842 16.5 14C16.5 15.3784 15.3789 16.5 14 16.5Z"
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

export default EnvelopeBan;
