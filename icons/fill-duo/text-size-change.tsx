import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSizeChange({
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
          d="M2.5 2C2.08579 2 1.75 2.33579 1.75 2.75C1.75 3.16421 2.08579 3.5 2.5 3.5H7V15.25C7 15.6642 7.33579 16 7.75 16C8.16421 16 8.5 15.6642 8.5 15.25V3.5H13C13.4142 3.5 13.75 3.16421 13.75 2.75C13.75 2.33579 13.4142 2 13 2H2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.4697 6.21967C13.7626 5.92678 14.2374 5.92678 14.5303 6.21967L16.7803 8.46967C17.0732 8.76256 17.0732 9.23744 16.7803 9.53033C16.4874 9.82322 16.0126 9.82322 15.7197 9.53033L14 7.81066L12.2803 9.53033C11.9874 9.82322 11.5126 9.82322 11.2197 9.53033C10.9268 9.23744 10.9268 8.76256 11.2197 8.46967L13.4697 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2197 11.4697C11.5126 11.1768 11.9874 11.1768 12.2803 11.4697L14 13.1893L15.7197 11.4697C16.0126 11.1768 16.4874 11.1768 16.7803 11.4697C17.0732 11.7626 17.0732 12.2374 16.7803 12.5303L14.5303 14.7803C14.2374 15.0732 13.7626 15.0732 13.4697 14.7803L11.2197 12.5303C10.9268 12.2374 10.9268 11.7626 11.2197 11.4697Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextSizeChange;
