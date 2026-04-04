import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopVideo({
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
          d="M17.619 1.288C17.385 1.155 17.094 1.159 16.865 1.299L14.969 2.436C14.814 1.345 13.884 0.5 12.751 0.5H10.251C9.00998 0.5 8.00098 1.51 8.00098 2.75V4.25C8.00098 5.49 9.00998 6.5 10.251 6.5H12.751C13.884 6.5 14.815 5.655 14.969 4.564L16.864 5.7C16.983 5.772 17.117 5.808 17.251 5.808C17.378 5.808 17.505 5.776 17.619 5.711C17.854 5.578 18 5.328 18 5.058V1.941C18 1.67 17.854 1.42 17.619 1.288Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V12.75C1.5 13.2002 1.60807 13.625 1.79968 14H0.75C0.335786 14 0 14.3358 0 14.75C0 15.1642 0.335786 15.5 0.75 15.5H4.25H13.75H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H16.2003C16.3919 13.625 16.5 13.2002 16.5 12.75V8.3699C16.5 7.95569 16.1642 7.6199 15.75 7.6199C15.3358 7.6199 15 7.95569 15 8.3699V12.75C15 13.4408 14.4408 14 13.75 14H4.25C3.55921 14 3 13.4408 3 12.75V4.75C3 4.05921 3.55921 3.5 4.25 3.5H5.75C6.16421 3.5 6.5 3.16421 6.5 2.75C6.5 2.33579 6.16421 2 5.75 2H4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopVideo;
