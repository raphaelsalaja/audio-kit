import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserBan({
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
          d="M14 10C11.7908 10 10 11.7909 10 14C10 16.2091 11.7908 18 14 18C16.2092 18 18 16.2091 18 14C18 11.7909 16.2092 10 14 10ZM11.5 14C11.5 12.6193 12.6192 11.5 14 11.5C14.4172 11.5 14.8106 11.6022 15.1564 11.7829L11.783 15.1564C11.6022 14.8106 11.5 14.4172 11.5 14ZM12.8436 16.2171C13.1894 16.3978 13.5828 16.5 14 16.5C15.3808 16.5 16.5 15.3807 16.5 14C16.5 13.5828 16.3978 13.1894 16.2171 12.8436L12.8436 16.2171Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.38645 16.9955C8.82571 16.1336 8.49993 15.1049 8.49993 14C8.49993 12.0247 9.54121 10.2926 11.1048 9.32274C10.4409 9.11311 9.73382 9 8.99993 9C6.14161 9 3.69052 10.7157 2.60511 13.1674C2.05155 14.4186 2.74419 15.8317 4.01253 16.2313C5.29497 16.6354 6.99277 17 8.99993 17C9.13008 17 9.25893 16.9985 9.38645 16.9955Z"
          fill={fill}
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserBan;
