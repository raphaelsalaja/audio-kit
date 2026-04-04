import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs({
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
          d="M1.75 9C1.75 4.996 4.99577 1.75 9 1.75C13.0042 1.75 16.25 4.99589 16.25 9C16.25 13.0041 13.0042 16.25 9 16.25C4.99577 16.25 1.75 13.004 1.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 9C6 7.34327 7.3427 6 9 6C10.6573 6 12 7.34327 12 9C12 10.6567 10.6573 12 9 12C7.3427 12 6 10.6567 6 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V2.5C9.75 2.91421 9.41421 3.25 9 3.25C8.58579 3.25 8.25 2.91421 8.25 2.5V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.75 9C14.75 8.58579 15.0858 8.25 15.5 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H15.5C15.0858 9.75 14.75 9.41421 14.75 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V15.5C8.25 15.0858 8.58579 14.75 9 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.5C2.91421 8.25 3.25 8.58579 3.25 9C3.25 9.41421 2.91421 9.75 2.5 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs;
