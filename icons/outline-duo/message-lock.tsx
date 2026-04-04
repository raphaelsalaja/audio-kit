import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageLock({
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
          d="M16.25 12.75H12.25C11.6977 12.75 11.25 13.198 11.25 13.75V15.25C11.25 15.802 11.6977 16.25 12.25 16.25H16.25C16.8023 16.25 17.25 15.802 17.25 15.25V13.75C17.25 13.198 16.8023 12.75 16.25 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L9 14.259V13.75C9 12.6039 9.59356 11.5958 10.4904 11.0171L10.5078 11.0059C10.5628 10.1497 10.9054 9.37168 11.4398 8.76724C12.127 7.99011 13.1314 7.5 14.25 7.5C14.8666 7.5 15.4485 7.64891 15.9616 7.91271C16.1423 8.00558 16.25 7.6885 16.25 7.48535V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 12.75H12.25C11.6977 12.75 11.25 13.198 11.25 13.75V15.25C11.25 15.802 11.6977 16.25 12.25 16.25H16.25C16.8023 16.25 17.25 15.802 17.25 15.25V13.75C17.25 13.198 16.8023 12.75 16.25 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.24219V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.25 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V11.25C12.75 10.422 13.422 9.75 14.25 9.75C15.078 9.75 15.75 10.422 15.75 11.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MessageLock;
