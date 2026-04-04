import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersLock({
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
          d="M16.25 12.7505H12.25C11.6977 12.7505 11.25 13.1982 11.25 13.7505V15.2505C11.25 15.8028 11.6977 16.2505 12.25 16.2505H16.25C16.8023 16.2505 17.25 15.8028 17.25 15.2505V13.7505C17.25 13.1982 16.8023 12.7505 16.25 12.7505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.7505V11.2505C12.75 10.4225 13.422 9.75049 14.25 9.75049C15.078 9.75049 15.75 10.4225 15.75 11.2505V12.7505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.00049C8.2426 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.2426 2.50049 7 2.50049C5.7574 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.7574 7.00049 7 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.97559C11.824 6.98659 11.9101 7.00049 12 7.00049C13.243 7.00049 14.25 5.99339 14.25 4.75049C14.25 3.50759 13.243 2.50049 12 2.50049C11.91 2.50049 11.8239 2.51418 11.7369 2.52518"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.8771 10.3438C9.0388 9.82089 8.0623 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.991 14.9266 5.368 15.2515 7 15.2515C7.4415 15.2515 7.8514 15.2173 8.25 15.1726"
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

export default UsersLock;
