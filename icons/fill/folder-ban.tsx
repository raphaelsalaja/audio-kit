import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderBan({
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
          d="M13 10C10.794 10 9 11.794 9 14C9 16.206 10.794 18 13 18C15.206 18 17 16.206 17 14C17 11.794 15.206 10 13 10ZM13 11.5C13.416 11.5 13.802 11.612 14.147 11.792L10.792 15.147C10.612 14.802 10.5 14.415 10.5 14C10.5 12.622 11.622 11.5 13 11.5ZM13 16.5C12.584 16.5 12.198 16.388 11.853 16.208L15.208 12.853C15.388 13.198 15.5 13.585 15.5 14C15.5 15.378 14.378 16.5 13 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.87583 16C7.63322 15.38 7.5 14.7053 7.5 14C7.5 10.9656 9.96557 8.5 13 8.5C14.3289 8.5 15.5486 8.97285 16.5 9.75925V6.25C16.5 4.734 15.267 3.5 13.75 3.5H8.724L8.346 3.029C7.821 2.375 7.039 2 6.201 2H4.25C2.733 2 1.5 3.234 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H7.87583ZM3 4.75V6.314C3.377 6.12 3.798 6 4.25 6H13.75C14.202 6 14.623 6.12 15 6.314V6.25C15 5.561 14.439 5 13.75 5H8.364C8.136 5 7.921 4.896 7.779 4.719L7.176 3.967C6.938 3.67 6.582 3.5 6.201 3.5H4.25C3.561 3.5 3 4.061 3 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderBan;
