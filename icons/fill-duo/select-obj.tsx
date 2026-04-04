import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectObj({
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
          d="M5 14.25C5 13.8358 5.33579 13.5 5.75 13.5H8.0614C8.47561 13.5 8.8114 13.8358 8.8114 14.25C8.8114 14.6642 8.47561 15 8.0614 15H5.75C5.33579 15 5 14.6642 5 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.25 5C14.6642 5 15 5.33579 15 5.75V8.0614C15 8.47561 14.6642 8.8114 14.25 8.8114C13.8358 8.8114 13.5 8.47561 13.5 8.0614V5.75C13.5 5.33579 13.8358 5 14.25 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.06531 10.4408C8.75305 9.58385 9.58408 8.75326 10.4407 9.06535L17.2954 11.5695C18.2555 11.9217 18.2254 13.2868 17.2558 13.5989L14.4856 14.4855L13.5993 17.2546C13.2863 18.2301 11.9206 18.2525 11.5699 17.2963L9.06531 10.4408Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 4C4.16421 4 4.5 4.33579 4.5 4.75V13.25C4.5 13.6642 4.16421 14 3.75 14C3.33579 14 3 13.6642 3 13.25V4.75C3 4.33579 3.33579 4 3.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 3.75C4 3.33579 4.33579 3 4.75 3H13.25C13.6642 3 14 3.33579 14 3.75C14 4.16421 13.6642 4.5 13.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
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
          d="M12 2.75C12 2.05197 12.5635 1.5 13.25 1.5H15.25C15.9365 1.5 16.5 2.05197 16.5 2.75V4.75C16.5 5.44803 15.9365 6 15.25 6H13.25C12.5635 6 12 5.44803 12 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 13.25C1.5 12.552 2.06351 12 2.75 12H4.75C5.43649 12 6 12.552 6 13.25V15.25C6 15.948 5.43649 16.5 4.75 16.5H2.75C2.06351 16.5 1.5 15.948 1.5 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SelectObj;
