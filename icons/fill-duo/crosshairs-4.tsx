import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs4({
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
          d="M1 9C1 4.58169 4.58169 1 9 1C13.4183 1 17 4.58169 17 9C17 13.4183 13.4183 17 9 17C4.58169 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 6.5C9.75 6.08579 9.41421 5.75 9 5.75C8.58579 5.75 8.25 6.08579 8.25 6.5V8.25H6.5C6.08579 8.25 5.75 8.58579 5.75 9C5.75 9.41421 6.08579 9.75 6.5 9.75H8.25V11.5C8.25 11.9142 8.58579 12.25 9 12.25C9.41421 12.25 9.75 11.9142 9.75 11.5V9.75H11.5C11.9142 9.75 12.25 9.41421 12.25 9C12.25 8.58579 11.9142 8.25 11.5 8.25H9.75V6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V2.75C9.75 3.16421 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.16421 8.25 2.75V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 9C14.5 8.58579 14.8358 8.25 15.25 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H15.25C14.8358 9.75 14.5 9.41421 14.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14.5C9.41421 14.5 9.75 14.8358 9.75 15.25V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V15.25C8.25 14.8358 8.58579 14.5 9 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H2.75C3.16421 8.25 3.5 8.58579 3.5 9C3.5 9.41421 3.16421 9.75 2.75 9.75H1C0.585786 9.75 0.25 9.41421 0.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs4;
