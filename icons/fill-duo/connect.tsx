import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connect({
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
          d="M10 13C10 11.3428 11.3428 10 13 10C14.6572 10 16 11.3428 16 13C16 14.6572 14.6572 16 13 16C11.3428 16 10 14.6572 10 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 5C2 3.34279 3.34279 2 5 2C6.65721 2 8 3.34279 8 5C8 6.65721 6.65721 8 5 8C3.34279 8 2 6.65721 2 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 5C10 3.34279 11.3428 2 13 2C14.6572 2 16 3.34279 16 5C16 6.65721 14.6572 8 13 8C12.4435 8 11.9225 7.8486 11.4759 7.58473L7.58473 11.4759C7.8486 11.9225 8 12.4435 8 13C8 14.6572 6.65721 16 5 16C3.34279 16 2 14.6572 2 13C2 11.3428 3.34279 10 5 10C5.55644 10 6.07744 10.1514 6.52405 10.4152L10.4152 6.52405C10.1514 6.07744 10 5.55644 10 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Connect;
