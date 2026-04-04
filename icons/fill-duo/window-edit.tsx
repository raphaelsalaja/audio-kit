import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowEdit({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V7H17V4.75C17 3.23 15.767 2 14.25 2ZM3.5 5.5C2.948 5.5 2.5 5.05 2.5 4.5C2.5 3.95 2.948 3.5 3.5 3.5C4.052 3.5 4.5 3.95 4.5 4.5C4.5 5.05 4.052 5.5 3.5 5.5ZM6.5 5.5C5.948 5.5 5.5 5.05 5.5 4.5C5.5 3.95 5.948 3.5 6.5 3.5C7.052 3.5 7.5 3.95 7.5 4.5C7.5 5.05 7.052 5.5 6.5 5.5Z"
          fill={fill}
        />
        <path
          d="M9.66901 13.4707C9.77791 13.1523 9.96391 12.8545 10.2051 12.6133L13.3662 9.45215C13.979 8.83885 14.7954 8.50195 15.6641 8.50195C16.1339 8.50195 16.5848 8.6084 17 8.7959V7H1V13.25C1 14.77 2.231 16 3.75 16H8.79671L9.66901 13.4707Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.2374 10.8486L16.9015 10.5127C16.2199 9.83106 15.1085 9.83106 14.4269 10.5127L11.2658 13.6738C11.1857 13.7539 11.1242 13.8515 11.0871 13.9599L10.1662 16.6308C10.0724 16.9013 10.1418 17.202 10.3449 17.4051C10.4875 17.5487 10.6799 17.6248 10.8752 17.6248C10.9572 17.6248 11.0393 17.6111 11.1193 17.5838L13.7902 16.6629C13.8986 16.6258 13.9963 16.5643 14.0763 16.4842L17.2374 13.3232C17.92 12.6406 17.92 11.5312 17.2374 10.8486Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowEdit;
