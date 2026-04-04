import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBillCoin({
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
          d="M15.25 10.25H10.75C10.198 10.25 9.75 10.698 9.75 11.25V12.25C9.75 12.802 10.198 13.25 10.75 13.25H15.25C15.802 13.25 16.25 12.802 16.25 12.25V11.25C16.25 10.698 15.802 10.25 15.25 10.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 7.25H11.75C11.198 7.25 10.75 7.698 10.75 8.25V9.25C10.75 9.802 11.198 10.25 11.75 10.25H16.25C16.802 10.25 17.25 9.802 17.25 9.25V8.25C17.25 7.698 16.802 7.25 16.25 7.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.25H11.75C11.198 13.25 10.75 13.698 10.75 14.25V15.25C10.75 15.802 11.198 16.25 11.75 16.25H16.25C16.802 16.25 17.25 15.802 17.25 15.25V14.25C17.25 13.698 16.802 13.25 16.25 13.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 7.75C4.664 7.75 5 7.414 5 7C5 6.586 4.664 6.25 4.25 6.25C3.836 6.25 3.5 6.586 3.5 7C3.5 7.414 3.836 7.75 4.25 7.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.6936 8.69839C7.127 8.34519 6.75 7.7169 6.75 7C6.75 5.895 7.645 5 8.75 5C8.9454 5 9.1343 5.02791 9.3129 5.08011"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 12.25H3.75C2.645 12.25 1.75 11.355 1.75 10.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H14.25C15.355 1.75 16.25 2.645 16.25 3.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 10.25H10.75C10.198 10.25 9.75 10.698 9.75 11.25V12.25C9.75 12.802 10.198 13.25 10.75 13.25H15.25C15.802 13.25 16.25 12.802 16.25 12.25V11.25C16.25 10.698 15.802 10.25 15.25 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25H11.75C11.198 7.25 10.75 7.698 10.75 8.25V9.25C10.75 9.802 11.198 10.25 11.75 10.25H16.25C16.802 10.25 17.25 9.802 17.25 9.25V8.25C17.25 7.698 16.802 7.25 16.25 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 13.25H11.75C11.198 13.25 10.75 13.698 10.75 14.25V15.25C10.75 15.802 11.198 16.25 11.75 16.25H16.25C16.802 16.25 17.25 15.802 17.25 15.25V14.25C17.25 13.698 16.802 13.25 16.25 13.25Z"
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

export default MoneyBillCoin;
