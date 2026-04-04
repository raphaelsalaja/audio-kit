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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H10.1466C9.76775 15.2904 9.5 14.4529 9.5 13.5C9.5 10.7419 11.7419 8.5 14.5 8.5C15.0224 8.5 15.5263 8.58043 16 8.72958V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75C3.71996 4.5 2.82259 5.06594 2.35143 5.9037L3.77709 3.0288C4.24151 2.09309 5.1956 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
          fill={fill}
        />
        <path
          d="M9.00002 3.5C9.41423 3.5 9.75002 3.83579 9.75002 4.25V7.25C9.75002 7.66421 9.41423 8 9.00002 8C8.5858 8 8.25002 7.66421 8.25002 7.25V4.25C8.25002 3.83579 8.5858 3.5 9.00002 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 10C12.5703 10 11 11.5703 11 13.5C11 16.1543 14.0107 17.8369 14.1396 17.9072C14.2519 17.9687 14.3759 18 14.5 18C14.6241 18 14.748 17.9688 14.8604 17.9072C14.9893 17.8369 18 16.1543 18 13.5C18 11.5703 16.4297 10 14.5 10ZM14.5 14.5C13.9478 14.5 13.5 14.0522 13.5 13.5C13.5 12.9478 13.9478 12.5 14.5 12.5C15.0522 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0522 14.5 14.5 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BoxPin;
