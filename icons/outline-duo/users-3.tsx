import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users3({
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
          d="M13.4844 14.6635C13.9158 13.7069 13.9517 12.5671 13.4139 11.5036C13.1795 11.0402 12.8996 10.6031 12.5801 10.1985C12.5301 10.1352 13.0722 9.72725 13.0966 9.73466C14.5421 10.1732 15.7346 11.1918 16.406 12.519C16.806 13.31 16.377 14.276 15.54 14.567C15.0585 14.7342 14.5015 14.8942 13.8784 15.0173C13.6977 15.0529 13.3922 14.8677 13.4844 14.6635Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.5 7C12.7426 7 13.75 5.99264 13.75 4.75C13.75 3.50736 12.7426 2.5 11.5 2.5C11.3487 2.5 10.4278 2.52669 10.5716 2.83121C10.8463 3.41324 11 4.06368 11 4.75C11 5.43691 10.8461 6.08789 10.5709 6.6703C10.4422 6.94268 11.3789 7 11.5 7Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.5 7C7.74264 7 8.75 5.99264 8.75 4.75C8.75 3.50736 7.74264 2.5 6.5 2.5C5.25736 2.5 4.25 3.50736 4.25 4.75C4.25 5.99264 5.25736 7 6.5 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.54 14.567C11.377 14.276 11.806 13.31 11.406 12.519C10.5 10.728 8.645 9.49902 6.5 9.49902C4.355 9.49902 2.5 10.727 1.594 12.519C1.194 13.31 1.622 14.276 2.46 14.567C3.491 14.925 4.868 15.25 6.5 15.25C8.132 15.25 9.509 14.925 10.54 14.567Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.1665 14.9453C14.6676 14.833 15.1388 14.7065 15.54 14.5674C16.377 14.2764 16.806 13.3106 16.406 12.5195C15.7471 11.2168 14.5834 10.2182 13.1736 9.76709"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.2371 6.97559C11.324 6.98659 11.4101 7.00049 11.5 7.00049C12.743 7.00049 13.75 5.99339 13.75 4.75049C13.75 3.50759 12.743 2.50049 11.5 2.50049C11.41 2.50049 11.3239 2.51421 11.2369 2.52521"
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

export default Users3;
