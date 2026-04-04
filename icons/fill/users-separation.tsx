import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersSeparation({
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
          d="M9 1.25C8.586 1.25 8.25 1.586 8.25 2V16C8.25 16.414 8.586 16.75 9 16.75C9.414 16.75 9.75 16.414 9.75 16V2C9.75 1.586 9.414 1.25 9 1.25Z"
          fill={secondaryfill}
        />
        <path
          d="M4 7.5C5.24264 7.5 6.25 6.49264 6.25 5.25C6.25 4.00736 5.24264 3 4 3C2.75736 3 1.75 4.00736 1.75 5.25C1.75 6.49264 2.75736 7.5 4 7.5Z"
          fill={fill}
        />
        <path
          d="M4 8.5C2.346 8.5 1 9.846 1 11.5V13.75C1 14.715 1.785 15.5 2.75 15.5H5.25C6.215 15.5 7 14.715 7 13.75V11.5C7 9.846 5.654 8.5 4 8.5Z"
          fill={fill}
        />
        <path
          d="M14 7.5C15.2426 7.5 16.25 6.49264 16.25 5.25C16.25 4.00736 15.2426 3 14 3C12.7574 3 11.75 4.00736 11.75 5.25C11.75 6.49264 12.7574 7.5 14 7.5Z"
          fill={fill}
        />
        <path
          d="M14 8.5C12.346 8.5 11 9.846 11 11.5V13.75C11 14.715 11.785 15.5 12.75 15.5H15.25C16.215 15.5 17 14.715 17 13.75V11.5C17 9.846 15.654 8.5 14 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UsersSeparation;
