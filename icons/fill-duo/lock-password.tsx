import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockPassword({
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
          d="M6.5 4C6.5 2.61921 7.61921 1.5 9 1.5C10.3808 1.5 11.5 2.61921 11.5 4V6H6.5V4ZM5 6V4C5 1.79079 6.79079 0 9 0C11.2092 0 13 1.79079 13 4V6H13.25C14.2162 6 15 6.78379 15 7.75V12.25C15 13.2162 14.2162 14 13.25 14H4.75C3.78379 14 3 13.2162 3 12.25V7.75C3 6.78379 3.78379 6 4.75 6H5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 18C2.94 18 3.5 17.44 3.5 16.75C3.5 16.06 2.94 15.5 2.25 15.5C1.56 15.5 1 16.06 1 16.75C1 17.44 1.56 18 2.25 18Z"
          fill={fill}
        />
        <path
          d="M6.75 18C7.44 18 8 17.44 8 16.75C8 16.06 7.44 15.5 6.75 15.5C6.06 15.5 5.5 16.06 5.5 16.75C5.5 17.44 6.06 18 6.75 18Z"
          fill={fill}
        />
        <path
          d="M11.25 18C11.94 18 12.5 17.44 12.5 16.75C12.5 16.06 11.94 15.5 11.25 15.5C10.56 15.5 10 16.06 10 16.75C10 17.44 10.56 18 11.25 18Z"
          fill={fill}
        />
        <path
          d="M15.75 18C16.44 18 17 17.44 17 16.75C17 16.06 16.44 15.5 15.75 15.5C15.06 15.5 14.5 16.06 14.5 16.75C14.5 17.44 15.06 18 15.75 18Z"
          fill={fill}
        />
        <path
          d="M9 8.75C9.41421 8.75 9.75 9.08579 9.75 9.5V10.5C9.75 10.9142 9.41421 11.25 9 11.25C8.58579 11.25 8.25 10.9142 8.25 10.5V9.5C8.25 9.08579 8.58579 8.75 9 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LockPassword;
