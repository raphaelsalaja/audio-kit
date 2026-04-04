import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleLock({
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
          d="M16.25 12.75H12.25C11.6977 12.75 11.25 13.1977 11.25 13.75V15.25C11.25 15.8023 11.6977 16.25 12.25 16.25H16.25C16.8023 16.25 17.25 15.8023 17.25 15.25V13.75C17.25 13.1977 16.8023 12.75 16.25 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V16.25L6 13.25H9.02734C9.17297 12.3069 9.73495 11.4976 10.5078 11.0059C10.6336 9.04898 12.2614 7.5 14.25 7.5C14.6935 7.5 15.1191 7.57704 15.514 7.71848C15.6438 7.76496 15.75 7.61837 15.75 7.4805V4.75C15.75 3.645 14.855 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 12.75H12.25C11.6977 12.75 11.25 13.1977 11.25 13.75V15.25C11.25 15.8023 11.6977 16.25 12.25 16.25H16.25C16.8023 16.25 17.25 15.8023 17.25 15.25V13.75C17.25 13.1977 16.8023 12.75 16.25 12.75Z"
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
        <path
          d="M15.75 7.0176V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H8.2831"
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

export default ChatBubbleLock;
