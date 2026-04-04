import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fork({
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
          d="M9 9.5C9.41421 9.5 9.75 9.83579 9.75 10.25V16C9.75 16.4142 9.41421 16.75 9 16.75C8.58579 16.75 8.25 16.4142 8.25 16V10.25C8.25 9.83579 8.58579 9.5 9 9.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V7.25C9.75 7.66421 9.41421 8 9 8C8.58579 8 8.25 7.66421 8.25 7.25V2C8.25 1.58579 8.58579 1.25 9 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.05836 1.25228C6.47131 1.28451 6.77995 1.64541 6.74773 2.05836L6.38723 6.67746C6.26835 8.20044 7.47229 9.50201 9 9.50201C10.5278 9.50201 11.7316 8.20055 11.6128 6.67747L11.2523 2.05836C11.22 1.64541 11.5287 1.28451 11.9416 1.25228C12.3546 1.22005 12.7155 1.52869 12.7477 1.94165L13.1082 6.56075C13.2951 8.95566 11.4022 11.002 9 11.002C6.59791 11.002 4.70485 8.95557 4.89177 6.56075L5.25227 1.94165C5.2845 1.52869 5.6454 1.22005 6.05836 1.25228Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Fork;
