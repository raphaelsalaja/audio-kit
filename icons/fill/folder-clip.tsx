import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderClip({
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
          d="M16.75 12C16.336 12 16 12.336 16 12.75V14.75C16 15.715 15.215 16.5 14.25 16.5C13.285 16.5 12.5 15.715 12.5 14.75V12.25C12.5 11.974 12.724 11.75 13 11.75C13.276 11.75 13.5 11.974 13.5 12.25V14.25C13.5 14.664 13.836 15 14.25 15C14.664 15 15 14.664 15 14.25V12.25C15 11.147 14.103 10.25 13 10.25C11.897 10.25 11 11.147 11 12.25V14.75C11 16.542 12.458 18 14.25 18C16.042 18 17.5 16.542 17.5 14.75V12.75C17.5 12.336 17.164 12 16.75 12Z"
          fill={secondaryfill}
        />
        <path
          d="M9.66666 16C9.55801 15.6016 9.5 15.1825 9.5 14.75V12.25C9.5 10.3186 11.0686 8.75 13 8.75C14.3348 8.75 15.4963 9.49914 16.0865 10.5995C16.2195 10.5585 16.3577 10.5295 16.5 10.5137V6.25C16.5 4.734 15.267 3.5 13.75 3.5H8.724L8.346 3.029C7.821 2.375 7.039 2 6.201 2H4.25C2.733 2 1.5 3.234 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H9.66666ZM3 4.75V6.314C3.377 6.12 3.798 6 4.25 6H13.75C14.202 6 14.623 6.12 15 6.314V6.25C15 5.561 14.439 5 13.75 5H8.364C8.136 5 7.921 4.896 7.779 4.719L7.176 3.967C6.938 3.67 6.582 3.5 6.201 3.5H4.25C3.561 3.5 3 4.061 3 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderClip;
