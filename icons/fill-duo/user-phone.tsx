import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPhone({
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
          d="M8.51601 10.775C8.47601 10.125 8.67401 9.505 9.03701 9.003C9.02501 9.003 9.01301 9 9.00001 9C6.23501 9 3.72601 10.636 2.60501 13.167C2.34801 13.747 2.35101 14.412 2.61301 14.992C2.88101 15.584 3.39001 16.035 4.01201 16.231C5.63001 16.741 7.30801 17 8.99901 17C9.91001 17 10.816 16.919 11.712 16.77C9.89001 15.36 8.67001 13.214 8.51601 10.775Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.235 13.5001L16.376 13.1511C15.857 12.9221 15.247 13.0681 14.909 13.4911L13.901 14.6601C13.277 14.2561 12.744 13.7231 12.339 13.0991L13.489 12.1071C13.93 11.7531 14.079 11.1441 13.858 10.6461L13.49 9.74305C13.242 9.18005 12.624 8.88605 11.989 9.05305L10.877 9.41805C10.334 9.59705 9.97799 10.1151 10.013 10.6801C10.226 14.0621 12.937 16.7731 16.32 16.9861C16.345 16.9871 16.372 16.9881 16.397 16.9881C16.93 16.9881 17.411 16.6401 17.582 16.1211L17.96 14.9651C18.115 14.3701 17.819 13.7581 17.235 13.5001Z"
          fill={fill}
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserPhone;
