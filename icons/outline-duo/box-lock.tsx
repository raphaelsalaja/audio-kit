import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxLock({
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
          d="M13.25 5.25H4.75C3.64543 5.25 2.75 6.14543 2.75 7.25V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H9V14.75C9 13.5961 9.60138 12.5826 10.5078 12.0059C10.6336 10.049 12.2614 8.5 14.25 8.5C14.5448 8.5 14.8317 8.53404 15.1069 8.5984C15.3725 8.66053 15.25 7.42728 15.25 7.25C15.25 6.14543 14.3546 5.25 13.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 2.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 6.284L4.449 3.362C4.787 2.681 5.481 2.25 6.241 2.25H11.759C12.519 2.25 13.213 2.681 13.551 3.362L15 6.285"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V12.25C12.75 11.422 13.422 10.75 14.25 10.75C15.078 10.75 15.75 11.422 15.75 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.8757V7.25C15.25 6.146 14.355 5.25 13.25 5.25H4.75C3.645 5.25 2.75 6.146 2.75 7.25V13.25C2.75 14.354 3.645 15.25 4.75 15.25H8.25"
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

export default BoxLock;
