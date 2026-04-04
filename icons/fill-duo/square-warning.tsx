import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareWarning({
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
          d="M13.25 2H4.75C3.231 2 2 3.23 2 4.75V13.25C2 14.77 3.231 16 4.75 16H13.25C14.769 16 16 14.77 16 13.25V4.75C16 3.23 14.769 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 10.25C8.5859 10.25 8.25 9.9141 8.25 9.5V5.43115C8.25 5.01705 8.5859 4.68115 9 4.68115C9.4141 4.68115 9.75 5.01705 9.75 5.43115V9.5C9.75 9.9141 9.4141 10.25 9 10.25Z"
          fill={fill}
        />
        <path
          d="M9 13.417C8.448 13.417 8 12.968 8 12.417C8 11.866 8.448 11.417 9 11.417C9.552 11.417 10 11.866 10 12.417C10 12.968 9.552 13.417 9 13.417Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareWarning;
