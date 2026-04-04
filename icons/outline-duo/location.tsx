import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location({
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
          d="M9 1.75C11.6234 1.75 13.75 3.88199 13.75 6.50879C13.7499 10.0777 10.2535 12.8534 9 13.25C7.74652 12.8534 4.25012 10.0777 4.25 6.50879C4.25 3.88209 6.3766 1.75 9 1.75ZM9 4.75C8.034 4.75 7.25 5.534 7.25 6.5C7.25 7.466 8.034 8.25 9 8.25C9.966 8.25 10.75 7.466 10.75 6.5C10.75 5.534 9.966 4.75 9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 13.25C10.2535 12.8534 13.75 10.0776 13.75 6.50861C13.75 3.88181 11.6234 1.75 9 1.75C6.3766 1.75 4.25 3.88191 4.25 6.50861C4.25 10.0776 7.7465 12.8534 9 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25C9.966 8.25 10.75 7.466 10.75 6.5C10.75 5.534 9.966 4.75 9 4.75C8.034 4.75 7.25 5.534 7.25 6.5C7.25 7.466 8.034 8.25 9 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.2505 12.8711C15.4897 13.23 16.25 13.7159 16.25 14.25C16.25 15.355 13.004 16.25 9 16.25C4.996 16.25 1.75 15.355 1.75 14.25C1.75 13.7152 2.51 13.2299 3.7487 12.8712"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Location;
