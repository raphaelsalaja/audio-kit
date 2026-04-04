import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderShield({
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
          d="M17.06 11.317L14.31 10.067C14.113 9.97701 13.886 9.97701 13.689 10.067L10.939 11.317C10.671 11.438 10.5 11.706 10.5 12V14.94C10.5 16.99 13.46 17.878 13.798 17.972C13.864 17.991 13.932 17.999 14 17.999C14.068 17.999 14.136 17.99 14.202 17.972C14.539 17.877 17.5 16.99 17.5 14.94V12C17.5 11.706 17.327 11.438 17.06 11.317ZM15.999 14.94C15.999 15.548 14.872 16.175 13.999 16.465V11.573L15.999 12.482V14.94Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.15871C9.05826 15.6767 9 15.3238 9 14.94V12C9 11.1244 9.50893 10.3179 10.3196 9.95088L13.0674 8.70189C13.6593 8.43204 14.3414 8.43278 14.9333 8.70265L16.5 9.41478V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderShield;
