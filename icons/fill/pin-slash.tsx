import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinSlash({
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
          d="M14.3568 4.14323C13.123 2.53635 11.1825 1.5 9 1.5C5.27195 1.5 2.25 4.52392 2.25 8.25C2.25 10.5137 3.25408 12.5077 4.4618 14.0354L8.35473 10.1436C7.56678 9.87519 7 9.12879 7 8.25C7 7.14543 7.89543 6.25 9 6.25C9.87899 6.25 10.6255 6.81703 10.8938 7.60526L14.3568 4.14323Z"
          fill={fill}
        />
        <path
          d="M15.4449 6.2381L6.00507 15.6766C6.32566 15.9646 6.64411 16.2226 6.9499 16.4477C7.61652 16.9385 8.2659 17.3047 8.77415 17.4652C8.92114 17.5116 9.07886 17.5116 9.22585 17.4652C9.7341 17.3047 10.3835 16.9385 11.0501 16.4477C11.7294 15.9477 12.4711 15.2854 13.1601 14.4916C14.5289 12.9149 15.75 10.7465 15.75 8.25C15.75 7.5494 15.6432 6.87362 15.4449 6.2381Z"
          fill={fill}
        />
        <path
          d="M1.99999 17.25C1.80799 17.25 1.61599 17.177 1.46999 17.03C1.17699 16.737 1.17699 16.262 1.46999 15.969L15.47 1.96999C15.763 1.67699 16.238 1.67699 16.531 1.96999C16.824 2.26299 16.824 2.73799 16.531 3.03099L2.52999 17.03C2.38399 17.176 2.19199 17.25 1.99999 17.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default PinSlash;
