import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeIncreaseX({
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
          d="M10.25 1H7.75C6.7835 1 6 1.7835 6 2.75V15.25C6 16.2165 6.7835 17 7.75 17H10.25C11.2165 17 12 16.2165 12 15.25V2.75C12 1.7835 11.2165 1 10.25 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.78 6.21999C14.487 5.92699 14.012 5.92699 13.719 6.21999C13.426 6.51299 13.426 6.98803 13.719 7.28103L15.439 9.001L13.719 10.721C13.426 11.014 13.426 11.489 13.719 11.782C13.865 11.928 14.057 12.002 14.249 12.002C14.441 12.002 14.633 11.929 14.779 11.782L17.029 9.53201C17.322 9.23901 17.322 8.76403 17.029 8.47103L14.779 6.22103L14.78 6.21999Z"
          fill={fill}
        />
        <path
          d="M4.27999 6.21999C3.98699 5.92699 3.51199 5.92699 3.21899 6.21999L0.969994 8.46999C0.676994 8.76299 0.676994 9.23803 0.969994 9.53103L3.21999 11.781C3.36599 11.927 3.55799 12.001 3.74999 12.001C3.94199 12.001 4.13399 11.928 4.27999 11.781C4.57299 11.488 4.57299 11.013 4.27999 10.72L2.55999 9.00002L4.27999 7.28005C4.57299 6.98705 4.57299 6.51299 4.27999 6.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeIncreaseX;
