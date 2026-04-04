import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderUser({
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
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={secondaryfill}
        />
        <path
          d="M16.1011 18H11.899C11.4923 18 11.1085 17.8013 10.8717 17.4683C10.6393 17.1407 10.5787 16.7207 10.7096 16.3453C11.1979 14.943 12.5201 14.0001 14.0001 14.0001C15.4801 14.0001 16.8023 14.943 17.2911 16.3458C17.4215 16.7208 17.3609 17.1407 17.1285 17.4684C16.8917 17.8014 16.5078 18 16.1011 18Z"
          fill={secondaryfill}
        />
        <path
          d="M9.29324 15.8514C9.69582 14.6958 10.4955 13.7573 11.5078 13.1706C11.1871 12.6931 11 12.1184 11 11.5C11 9.84317 12.3432 8.5 14 8.5C15.0435 8.5 15.9625 9.03277 16.5 9.84113V6.25098C16.5 4.73498 15.267 3.50098 13.75 3.50098H8.724L8.346 3.02998C7.821 2.37598 7.039 2.00098 6.201 2.00098H4.25C2.733 2.00098 1.5 3.23498 1.5 4.75098V13.25C1.5 14.767 2.733 16 4.25 16H9.24617C9.26033 15.9504 9.27615 15.9005 9.29324 15.8514ZM3 4.75V6.314C3.377 6.12 3.798 6 4.25 6H13.75C14.202 6 14.623 6.12 15 6.314V6.25C15 5.561 14.439 5 13.75 5H8.364C8.136 5 7.921 4.896 7.779 4.719L7.176 3.967C6.938 3.67 6.582 3.5 6.201 3.5H4.25C3.561 3.5 3 4.061 3 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderUser;
