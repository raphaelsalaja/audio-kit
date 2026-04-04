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
          d="M8.39059 14.5H3.75C3.0596 14.5 2.5 13.9404 2.5 13.25V8H16.25C16.6642 8 17 7.6642 17 7.25V4.75C17 3.2312 15.7688 2 14.25 2H3.75C2.2312 2 1 3.2312 1 4.75V13.25C1 14.7688 2.2312 16 3.75 16H8.39059C8.80459 16 9.14059 15.6602 9.14059 15.25C9.14059 14.8398 8.80459 14.5 8.39059 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
        <path
          d="M17.2374 10.8486L16.9015 10.5127C16.2199 9.83106 15.1085 9.83106 14.4269 10.5127L11.2658 13.6738C11.1857 13.7539 11.1242 13.8515 11.0871 13.9599L10.1662 16.6308C10.0724 16.9013 10.1418 17.202 10.3449 17.4051C10.4875 17.5487 10.6799 17.6248 10.8752 17.6248C10.9572 17.6248 11.0393 17.6111 11.1193 17.5838L13.7902 16.6629C13.8986 16.6258 13.9963 16.5643 14.0763 16.4842L17.2374 13.3232C17.92 12.6406 17.92 11.5312 17.2374 10.8486Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowEdit;
