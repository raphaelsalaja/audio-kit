import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditSquarePlus({
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
          d="M9.75 6.75C9.75 6.33579 9.41421 6 9 6C8.58579 6 8.25 6.33579 8.25 6.75V8.25H6.75C6.33579 8.25 6 8.58579 6 9C6 9.41421 6.33579 9.75 6.75 9.75H8.25V11.25C8.25 11.6642 8.58579 12 9 12C9.41421 12 9.75 11.6642 9.75 11.25V9.75H11.25C11.6642 9.75 12 9.41421 12 9C12 8.58579 11.6642 8.25 11.25 8.25H9.75V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 14.25C5 13.8358 5.33579 13.5 5.75 13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H5.75C5.33579 15 5 14.6642 5 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 3.75C5 3.33579 5.33579 3 5.75 3H12.25C12.6642 3 13 3.33579 13 3.75C13 4.16421 12.6642 4.5 12.25 4.5H5.75C5.33579 4.5 5 4.16421 5 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 5C4.16421 5 4.5 5.33579 4.5 5.75V12.25C4.5 12.6642 4.16421 13 3.75 13C3.33579 13 3 12.6642 3 12.25V5.75C3 5.33579 3.33579 5 3.75 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.25 5C14.6642 5 15 5.33579 15 5.75V12.25C15 12.6642 14.6642 13 14.25 13C13.8358 13 13.5 12.6642 13.5 12.25V5.75C13.5 5.33579 13.8358 5 14.25 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.5 2.75C1.5 2.05197 2.06351 1.5 2.75 1.5H4.75C5.43649 1.5 6 2.05197 6 2.75V4.75C6 5.44803 5.43649 6 4.75 6H2.75C2.06351 6 1.5 5.44803 1.5 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 13.25C1.5 12.552 2.06351 12 2.75 12H4.75C5.43649 12 6 12.552 6 13.25V15.25C6 15.948 5.43649 16.5 4.75 16.5H2.75C2.06351 16.5 1.5 15.948 1.5 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 2.75C12 2.05197 12.5635 1.5 13.25 1.5H15.25C15.9365 1.5 16.5 2.05197 16.5 2.75V4.75C16.5 5.44803 15.9365 6 15.25 6H13.25C12.5635 6 12 5.44803 12 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 13.25C12 12.552 12.5635 12 13.25 12H15.25C15.9365 12 16.5 12.552 16.5 13.25V15.25C16.5 15.948 15.9365 16.5 15.25 16.5H13.25C12.5635 16.5 12 15.948 12 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EditSquarePlus;
