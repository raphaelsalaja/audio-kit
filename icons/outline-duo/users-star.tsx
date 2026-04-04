import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersStar({
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
          d="M12 7C13.2427 7 14.25 5.99264 14.25 4.75C14.25 3.50736 13.2427 2.5 12 2.5C11.8843 2.5 10.9344 2.54332 11.0643 2.81575C11.3436 3.40171 11.5 4.05759 11.5 4.75C11.5 5.43198 11.3483 6.07852 11.0768 6.65772C10.9329 6.96477 11.8625 7 12 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7 7C8.24264 7 9.25 5.99264 9.25 4.75C9.25 3.50736 8.24264 2.5 7 2.5C5.75736 2.5 4.75 3.50736 4.75 4.75C4.75 5.99264 5.75736 7 7 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 9.81799L15.004 11.853L17.25 12.179L15.625 13.763L16.009 16L14 14.944L11.991 16L12.375 13.763L10.75 12.179L12.996 11.853L14 9.81799Z"
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
          d="M14 9.81799L15.004 11.853L17.25 12.179L15.625 13.763L16.009 16L14 14.944L11.991 16L12.375 13.763L10.75 12.179L12.996 11.853L14 9.81799Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51421 11.7369 2.52521"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.8793 9.84009C8.2933 9.62309 7.6618 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.991 14.9266 5.368 15.2515 7 15.2515C7.775 15.2515 8.4649 15.1624 9.111 15.0457"
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

export default UsersStar;
