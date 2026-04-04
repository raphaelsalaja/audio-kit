import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderDots({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M14 16C13.449 16 13 15.552 13 15C13 14.448 13.449 14 14 14C14.551 14 15 14.448 15 15C15 15.552 14.551 16 14 16Z"
          fill={fill}
        />
        <path
          d="M11 16C10.449 16 10 15.552 10 15C10 14.448 10.449 14 11 14C11.551 14 12 14.448 12 15C12 15.552 11.551 16 11 16Z"
          fill={fill}
        />
        <path
          d="M17 16C16.449 16 16 15.552 16 15C16 14.448 16.449 14 17 14C17.551 14 18 14.448 18 15C18 15.552 17.551 16 17 16Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H8.70823C8.57433 15.6938 8.5 15.3556 8.5 15C8.5 13.6186 9.62155 12.5 11 12.5C12.1408 12.5 12.8592 12.5 14 12.5C15.155 12.5 16.5 12.5 16.5 12.5V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderDots;
