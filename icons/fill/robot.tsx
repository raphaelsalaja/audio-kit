import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Robot({
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
          d="M9.75 2.25C9.75 1.83579 9.41421 1.5 9 1.5C8.58579 1.5 8.25 1.83579 8.25 2.25V5H9.75V2.25Z"
          fill={secondaryfill}
        />
        <path
          d="M2 10H1C0.585786 10 0.25 10.3358 0.25 10.75C0.25 11.1642 0.585786 11.5 1 11.5H2V10Z"
          fill={secondaryfill}
        />
        <path
          d="M16 11.5H17C17.4142 11.5 17.75 11.1642 17.75 10.75C17.75 10.3358 17.4142 10 17 10H16V11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M9 3.25C9.897 3.25 10.625 2.5224 10.625 1.625C10.625 0.7276 9.897 0 9 0C8.103 0 7.375 0.7276 7.375 1.625C7.375 2.5224 8.103 3.25 9 3.25Z"
          fill={secondaryfill}
        />
        <path
          d="M1.5 7.25C1.5 5.73079 2.73079 4.5 4.25 4.5H13.75C15.2692 4.5 16.5 5.73079 16.5 7.25V14.25C16.5 15.7692 15.2692 17 13.75 17H4.25C2.73079 17 1.5 15.7692 1.5 14.25V7.25ZM7 10C7 10.552 6.552 11 6 11C5.448 11 5 10.552 5 10C5 9.448 5.448 9 6 9C6.552 9 7 9.448 7 10ZM12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11ZM10.1666 11.5H7.83331C7.51131 11.5 7.24991 11.7613 7.24991 12.0833C7.24991 13.0493 8.03391 13.8333 8.99991 13.8333C9.96591 13.8333 10.7499 13.0493 10.7499 12.0833C10.7499 11.7613 10.4886 11.5 10.1666 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Robot;
