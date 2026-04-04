import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2({
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
          d="M15.75 13.25V11.75H13C12.034 11.75 11.25 10.966 11.25 10C11.25 9.033 12.034 8.25 13 8.25H15.75V6.5C15.75 5.395 14.855 4.5 13.75 4.5H4.25C3.145 4.5 2.25 5.395 2.25 6.5V13.25C2.25 14.355 3.145 15.25 4.25 15.25H13.75C14.855 15.25 15.75 14.355 15.75 13.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 6.49998C2.25 4.76698 3.499 3.28698 5.207 2.99498L11.769 1.87498C12.203 1.80098 12.635 2.01998 12.832 2.41398"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 11.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V6.75C2.25 5.645 3.145 4.75 4.25 4.75H13.75C14.855 4.75 15.75 5.645 15.75 6.75V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 11.75H13C12.034 11.75 11.25 10.966 11.25 10C11.25 9.033 12.034 8.25 13 8.25H15.75C16.302 8.25 16.75 8.698 16.75 9.25V10.75C16.75 11.302 16.302 11.75 15.75 11.75Z"
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

export default Wallet2;
