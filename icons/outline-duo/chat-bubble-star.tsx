import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleStar({
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
          d="M14 10.068L15.004 12.103L17.25 12.429L15.625 14.013L16.009 16.25L14 15.194L11.991 16.25L12.375 14.013L10.75 12.429L12.996 12.103L14 10.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 2.75H13.75C14.855 2.75 15.75 3.645 15.75 4.75V7.59074C15.75 7.90831 15.5717 8.42685 15.3139 8.24144C14.9381 7.97119 14.4808 7.81799 14 7.81799C13.1435 7.81799 12.3612 8.30434 11.9822 9.07249L11.5018 10.0463L10.4268 10.2023C9.57919 10.3254 8.87493 10.919 8.61018 11.7335C8.47225 12.1579 8.46609 12.604 8.57857 13.0184C8.63567 13.2288 8.23884 13.25 8.02084 13.25H6L2.25 16.25V4.75C2.25 3.645 3.145 2.75 4.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.75 7.6396V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V16.25L6 13.25H7.87"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.068L15.004 12.103L17.25 12.429L15.625 14.013L16.009 16.25L14 15.194L11.991 16.25L12.375 14.013L10.75 12.429L12.996 12.103L14 10.068Z"
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

export default ChatBubbleStar;
