import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeCommit({
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
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H5.75C6.16421 8.25 6.5 8.58579 6.5 9C6.5 9.41421 6.16421 9.75 5.75 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 9C11.5 8.58579 11.8358 8.25 12.25 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H12.25C11.8358 9.75 11.5 9.41421 11.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 9C5 6.79077 6.7909 5 9 5C11.2091 5 13 6.79077 13 9C13 11.2092 11.2091 13 9 13C6.7909 13 5 11.2092 5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CodeCommit;
