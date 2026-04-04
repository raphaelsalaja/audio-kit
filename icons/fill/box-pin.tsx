import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxPin({
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
          d="M8.24999 1.5H6.24099C5.18899 1.5 4.24499 2.086 3.77699 3.029L3.42899 3.732C3.84699 3.594 4.28599 3.501 4.74999 3.501H8.24999V1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M9.5 13.5C9.5 10.743 11.743 8.5 14.5 8.5C15.026 8.5 15.523 8.604 16 8.755V7.75C16 6.233 14.767 5 13.25 5H9.75V7.75C9.75 8.164 9.414 8.5 9 8.5C8.586 8.5 8.25 8.164 8.25 7.75V5H4.75C3.233 5 2 6.233 2 7.75V13.25C2 14.767 3.233 16 4.75 16H10.148C9.763 15.277 9.5 14.445 9.5 13.5Z"
          fill={fill}
        />
        <path
          d="M14.5 10C12.5703 10 11 11.5703 11 13.5C11 16.1543 14.0107 17.8369 14.1396 17.9072C14.2519 17.9687 14.3759 18 14.5 18C14.6241 18 14.748 17.9688 14.8604 17.9072C14.9893 17.8369 18 16.1543 18 13.5C18 11.5703 16.4297 10 14.5 10ZM14.5 14.5C13.9478 14.5 13.5 14.0522 13.5 13.5C13.5 12.9478 13.9478 12.5 14.5 12.5C15.0522 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0522 14.5 14.5 14.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.223 3.028C13.755 2.086 12.811 1.5 11.759 1.5H9.75V3.5H13.25C13.714 3.5 14.153 3.593 14.572 3.731L14.223 3.028Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BoxPin;
