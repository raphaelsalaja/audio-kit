import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vault3({
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
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V4.75C16 3.23079 14.7692 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H2.75C3.16421 8.25 3.5 8.58579 3.5 9C3.5 9.41421 3.16421 9.75 2.75 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 5.75C1 5.33579 1.33579 5 1.75 5H2.75C3.16421 5 3.5 5.33579 3.5 5.75C3.5 6.16421 3.16421 6.5 2.75 6.5H1.75C1.33579 6.5 1 6.16421 1 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H2.75C3.16421 11.5 3.5 11.8358 3.5 12.25C3.5 12.6642 3.16421 13 2.75 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.73278 9.83948C10.3331 9.56204 10.75 8.95441 10.75 8.25C10.75 7.284 9.966 6.5 9 6.5C8.034 6.5 7.25 7.284 7.25 8.25C7.25 8.95441 7.66688 9.56204 8.26722 9.83948C8.25594 9.89119 8.25 9.9449 8.25 10V11.75C8.25 12.1642 8.58579 12.5 9 12.5C9.41421 12.5 9.75 12.1642 9.75 11.75V10C9.75 9.9449 9.74406 9.89119 9.73278 9.83948Z"
          fill={fill}
        />
        <path
          d="M4 15.8965C4.2384 15.9639 4.48998 16 4.75 16H5.5V16.75C5.5 17.1642 5.16421 17.5 4.75 17.5C4.33579 17.5 4 17.1642 4 16.75V15.8965Z"
          fill={fill}
        />
        <path
          d="M12.5 16H13.25C13.51 16 13.7616 15.9639 14 15.8965V16.75C14 17.1642 13.6642 17.5 13.25 17.5C12.8358 17.5 12.5 17.1642 12.5 16.75V16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Vault3;
