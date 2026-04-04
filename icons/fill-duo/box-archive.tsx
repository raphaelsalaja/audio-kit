import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive({
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
          d="M2.5 6.25C2.5 5.83579 2.83579 5.5 3.25 5.5H14.75C15.1642 5.5 15.5 5.83579 15.5 6.25V13.25C15.5 14.7692 14.2692 16 12.75 16H5.25C3.73079 16 2.5 14.7692 2.5 13.25V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 3.75C1 2.78334 1.78393 2 2.75 2H15.25C16.2161 2 17 2.78334 17 3.75V5.25C17 6.21666 16.2161 7 15.25 7H2.75C1.78393 7 1 6.21666 1 5.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 9.75C6.25 9.33579 6.58579 9 7 9H11C11.4142 9 11.75 9.33579 11.75 9.75C11.75 10.1642 11.4142 10.5 11 10.5H7C6.58579 10.5 6.25 10.1642 6.25 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchive;
