import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Inbox({
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
          d="M6.24475 9.75H1.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V9.75H11.727V10.7329C11.727 11.2852 11.2793 11.7329 10.727 11.7329H7.24475C6.69247 11.7329 6.24475 11.2852 6.24475 10.7329V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.213 9.74999C16.19 9.62999 16.156 9.51199 16.111 9.39699L13.998 4.01799C13.697 3.25299 12.959 2.74899 12.136 2.74899H5.86301C5.04101 2.74899 4.30201 3.25199 4.00101 4.01799L1.88801 9.39699C1.84301 9.51099 1.80901 9.62899 1.78601 9.74999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 9.75V10.75C11.75 11.302 11.302 11.75 10.75 11.75H7.25C6.698 11.75 6.25 11.302 6.25 10.75V9.75H1.787C1.763 9.875 1.75 10.001 1.75 10.129V13.25C1.75 14.354 2.645 15.25 3.75 15.25H14.25C15.355 15.25 16.25 14.354 16.25 13.25V10.129C16.25 10.002 16.237 9.875 16.213 9.75H11.75Z"
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

export default Inbox;
