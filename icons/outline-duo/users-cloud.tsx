import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersCloud({
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
          d="M12 7C13.2427 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2427 2.5 12 2.5C11.8071 2.5 10.9391 2.55162 11.0686 2.82481C11.3452 3.40846 11.5 4.06116 11.5 4.75C11.5 5.44154 11.344 6.09666 11.0653 6.68206C10.9352 6.95524 11.8886 7 12 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5875 10.1677C8.8161 9.74899 7.9402 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.12201 14.2773 2.96001 14.5684C3.95261 14.9131 5.27211 15.2203 6.82511 15.2432"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75C13.2297 10.75 12.1711 11.616 11.8553 12.7864C11.7405 12.7627 11.6217 12.75 11.5 12.75C10.5335 12.75 9.75 13.5335 9.75 14.5C9.75 15.4665 10.5335 16.25 11.5 16.25H14.5C16.0188 16.25 17.25 15.0187 17.25 13.5C17.25 11.9813 16.0188 10.75 14.5 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51419 11.7369 2.52519"
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

export default UsersCloud;
