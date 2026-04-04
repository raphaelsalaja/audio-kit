import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs3({
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
          d="M9 3.75C9.41421 3.75 9.75 4.08579 9.75 4.5V6.75C9.75 7.16421 9.41421 7.5 9 7.5C8.58579 7.5 8.25 7.16421 8.25 6.75V4.5C8.25 4.08579 8.58579 3.75 9 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5 9C10.5 8.58579 10.8358 8.25 11.25 8.25H13.5C13.9142 8.25 14.25 8.58579 14.25 9C14.25 9.41421 13.9142 9.75 13.5 9.75H11.25C10.8358 9.75 10.5 9.41421 10.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 10.5C9.41421 10.5 9.75 10.8358 9.75 11.25V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5V11.25C8.25 10.8358 8.58579 10.5 9 10.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 9C3.75 8.58579 4.08579 8.25 4.5 8.25H6.75C7.16421 8.25 7.5 8.58579 7.5 9C7.5 9.41421 7.16421 9.75 6.75 9.75H4.5C4.08579 9.75 3.75 9.41421 3.75 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Crosshairs3;
