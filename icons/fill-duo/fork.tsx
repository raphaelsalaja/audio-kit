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
          d="M9 9.59406C9.41421 9.59406 9.75 9.92985 9.75 10.3441V16C9.75 16.4142 9.41421 16.75 9 16.75C8.58579 16.75 8.25 16.4142 8.25 16V10.3441C8.25 9.92985 8.58579 9.59406 9 9.59406Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V7.25C9.75 7.66421 9.41421 8 9 8C8.58579 8 8.25 7.66421 8.25 7.25V2C8.25 1.58579 8.58579 1.25 9 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.05834 1.25227C6.4713 1.2845 6.77994 1.6454 6.74772 2.05835L6.38723 6.67745C6.26835 8.20044 7.47228 9.502 8.99999 9.502C10.5278 9.502 11.7316 8.20055 11.6128 6.67746L11.2523 2.05836C11.22 1.6454 11.5287 1.2845 11.9416 1.25227C12.3546 1.22004 12.7155 1.52868 12.7477 1.94164L13.1082 6.56074C13.2951 8.95565 11.4022 11.002 8.99999 11.002C6.5979 11.002 4.70485 8.95556 4.89177 6.56074L5.25226 1.94164C5.28449 1.52869 5.64539 1.22004 6.05834 1.25227Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Fork;
