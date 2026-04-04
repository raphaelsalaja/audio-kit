import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderUser({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={fill}
        />
        <path
          d="M16.1011 18H11.899C11.4923 18 11.1085 17.8013 10.8717 17.4683C10.6393 17.1407 10.5787 16.7207 10.7096 16.3453C11.1979 14.943 12.5201 14.0001 14.0001 14.0001C15.4801 14.0001 16.8023 14.943 17.2911 16.3458C17.4215 16.7208 17.3609 17.1407 17.1285 17.4684C16.8917 17.8014 16.5078 18 16.1011 18Z"
          fill={fill}
        />
        <path
          d="M1.5 6.5H16.5V9.84113C15.9625 9.03277 15.0435 8.5 14 8.5C12.3432 8.5 11 9.84317 11 11.5C11 12.1184 11.1871 12.6931 11.5078 13.1706C10.4955 13.7573 9.69582 14.6958 9.29324 15.8514C9.27615 15.9005 9.26032 15.9504 9.24616 16H4.25C2.73079 16 1.5 14.7692 1.5 13.25V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderUser;
