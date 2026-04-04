import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneOffice({
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
          d="M14.75 3H7.92421C7.97361 3.2424 8.00002 3.4932 8.00002 3.75V14.25C8.00002 14.6904 7.90971 15.1072 7.76971 15.5H14.75C15.9907 15.5 17 14.4907 17 13.25V5.25C17 4.0093 15.9907 3 14.75 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 5.5H10.75C10.3358 5.5 10 5.83579 10 6.25V8.75C10 9.16421 10.3358 9.5 10.75 9.5H14.25C14.6642 9.5 15 9.16421 15 8.75V6.25C15 5.83579 14.6642 5.5 14.25 5.5Z"
          fill={fill}
        />
        <path
          d="M14.25 13C14.664 13 15 12.664 15 12.25C15 11.836 14.664 11.5 14.25 11.5C13.836 11.5 13.5 11.836 13.5 12.25C13.5 12.664 13.836 13 14.25 13Z"
          fill={fill}
        />
        <path
          d="M4.25 1.5H3.25C2.00736 1.5 1 2.50736 1 3.75V14.25C1 15.4926 2.00736 16.5 3.25 16.5H4.25C5.49264 16.5 6.5 15.4926 6.5 14.25V3.75C6.5 2.50736 5.49264 1.5 4.25 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhoneOffice;
