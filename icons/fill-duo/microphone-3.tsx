import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microphone3({
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
          d="M5 4C5 1.7909 6.79077 0 9 0C11.2092 0 13 1.7909 13 4V7.5C13 9.7091 11.2092 11.5 9 11.5C6.79077 11.5 5 9.7091 5 7.5V4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13 5V6.5H9.75C9.33579 6.5 9 6.16421 9 5.75C9 5.33579 9.33579 5 9.75 5H13Z"
          fill={fill}
        />
        <path
          d="M2.75 6.75C3.16421 6.75 3.5 7.08579 3.5 7.5C3.5 10.5318 5.96821 13 9 13C12.0318 13 14.5 10.5318 14.5 7.5C14.5 7.08579 14.8358 6.75 15.25 6.75C15.6642 6.75 16 7.08579 16 7.5C16 11.1069 13.2588 14.0848 9.75 14.4601V16.5H12.25C12.6642 16.5 13 16.8358 13 17.25C13 17.6642 12.6642 18 12.25 18H5.75C5.33579 18 5 17.6642 5 17.25C5 16.8358 5.33579 16.5 5.75 16.5H8.25V14.4601C4.7412 14.0848 2 11.1069 2 7.5C2 7.08579 2.33579 6.75 2.75 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Microphone3;
