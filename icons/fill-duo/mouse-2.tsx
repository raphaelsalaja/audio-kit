import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mouse2({
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
          d="M8.25 1C5.62679 1 3.5 3.12679 3.5 5.75V12.25C3.5 14.8732 5.62679 17 8.25 17H9.75C12.3732 17 14.5 14.8732 14.5 12.25V5.75C14.5 3.12679 12.3732 1 9.75 1H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 4.5C9.41421 4.5 9.75 4.83579 9.75 5.25V7.75C9.75 8.16421 9.41421 8.5 9 8.5C8.58579 8.5 8.25 8.16421 8.25 7.75V5.25C8.25 4.83579 8.58579 4.5 9 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Mouse2;
