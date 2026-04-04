import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersSparkle({
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
          d="M7 7.00049C8.2426 7.00049 9.25 5.99309 9.25 4.75049C9.25 3.50789 8.2426 2.50049 7 2.50049C5.7574 2.50049 4.75 3.50789 4.75 4.75049C4.75 5.99309 5.7574 7.00049 7 7.00049Z"
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
        <path
          d="M10.4557 10.7693C9.51011 9.99119 8.3208 9.50049 7 9.50049C4.855 9.50049 3 10.7295 2.094 12.5205C1.694 13.3115 2.12201 14.2773 2.96001 14.5684C3.99101 14.9266 5.368 15.2515 7 15.2515C7.4807 15.2515 7.92551 15.2122 8.35601 15.1607"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.2373 13.0386L15.3428 12.4077L14.7115 10.5132C14.6094 10.2075 14.3228 10.0005 14.0001 10.0005C13.6774 10.0005 13.3907 10.2075 13.2887 10.5132L12.6574 12.4077L10.7629 13.0386C10.4567 13.1411 10.2502 13.4273 10.2502 13.7505C10.2502 14.0737 10.4567 14.3599 10.7629 14.4624L12.6574 15.0933L13.2887 16.9878C13.3908 17.2935 13.6774 17.5005 14.0001 17.5005C14.3228 17.5005 14.6095 17.2935 14.7115 16.9878L15.3428 15.0933L17.2373 14.4624C17.5435 14.3599 17.75 14.0737 17.75 13.7505C17.75 13.4273 17.5435 13.1411 17.2373 13.0386Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default UsersSparkle;
