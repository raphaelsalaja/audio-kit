import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserList({
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
          d="M11 3.25049C11 2.83627 11.3358 2.50049 11.75 2.50049H16.25C16.6642 2.50049 17 2.83627 17 3.25049C17 3.6647 16.6642 4.00049 16.25 4.00049H11.75C11.3358 4.00049 11 3.6647 11 3.25049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11 6.75049C11 6.33627 11.3358 6.00049 11.75 6.00049H16.25C16.6642 6.00049 17 6.33627 17 6.75049C17 7.1647 16.6642 7.50049 16.25 7.50049H11.75C11.3358 7.50049 11 7.1647 11 6.75049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 10.2505C12.75 9.83627 13.0858 9.50049 13.5 9.50049H16.25C16.6642 9.50049 17 9.83627 17 10.2505C17 10.6647 16.6642 11.0005 16.25 11.0005H13.5C13.0858 11.0005 12.75 10.6647 12.75 10.2505Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.23177 12.454C2.26027 10.4197 4.36799 9.02246 6.80706 9.02246C9.24634 9.02246 11.3539 10.4209 12.3823 12.4539C13.0019 13.6792 12.3275 15.1198 11.0934 15.5489C10.0002 15.9284 8.53906 16.2735 6.80706 16.2735C5.07506 16.2735 3.61419 15.9285 2.52104 15.549C1.28508 15.1198 0.61244 13.6788 1.23177 12.454Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.80795 7.50049C8.32718 7.50049 9.55795 6.26922 9.55795 4.75049C9.55795 3.23176 8.32718 2.00049 6.80795 2.00049C5.28873 2.00049 4.05795 3.23176 4.05795 4.75049C4.05795 6.26922 5.28873 7.50049 6.80795 7.50049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserList;
