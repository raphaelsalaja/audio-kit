import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowUser({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V7H17V4.75C17 3.23 15.767 2 14.25 2ZM3.5 5.5C2.948 5.5 2.5 5.05 2.5 4.5C2.5 3.95 2.948 3.5 3.5 3.5C4.052 3.5 4.5 3.95 4.5 4.5C4.5 5.05 4.052 5.5 3.5 5.5ZM6.5 5.5C5.948 5.5 5.5 5.05 5.5 4.5C5.5 3.95 5.948 3.5 6.5 3.5C7.052 3.5 7.5 3.95 7.5 4.5C7.5 5.05 7.052 5.5 6.5 5.5Z"
          fill={fill}
        />
        <path
          d="M14.5 13C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10C13.6716 10 13 10.6716 13 11.5C13 12.3284 13.6716 13 14.5 13Z"
          fill={fill}
        />
        <path
          d="M17 13.1514C16.9937 13.1612 16.9893 13.1719 16.9829 13.1812C16.9889 13.1846 16.994 13.1895 17 13.1934V13.1514Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.793 15.8516C10.1956 14.6944 11.0041 13.7676 12.0171 13.1812C11.6911 12.7012 11.5 12.1226 11.5 11.5C11.5 9.8457 12.8457 8.5 14.5 8.5C15.5436 8.5 16.4624 9.03706 17 9.84766V7H1V13.25C1 14.77 2.231 16 3.75 16H8.26001C8.26871 15.9707 9.0897 15.9419 9.7796 15.9126C9.7861 15.8926 9.786 15.8716 9.793 15.8516Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.601 18H12.3989C11.9922 18 11.6084 17.8013 11.3716 17.4683C11.1392 17.1407 11.0786 16.7207 11.2095 16.3453C11.6978 14.943 13.02 14.0001 14.5 14.0001C15.98 14.0001 17.3022 14.943 17.791 16.3458C17.9214 16.7208 17.8608 17.1407 17.6284 17.4684C17.3916 17.8014 17.0077 18 16.601 18Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowUser;
