import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShield({
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
          d="M17.5605 11.3174L14.8105 10.0674C14.6132 9.97755 14.3867 9.97755 14.1894 10.0674L11.4395 11.3174C11.1719 11.4384 11 11.7061 11 12V14.9404C11 16.9901 13.9604 17.8779 14.2979 17.9725C14.3638 17.9911 14.4322 17.9998 14.5 17.9998C14.5678 17.9998 14.6362 17.991 14.7021 17.9725C15.0395 17.8779 18 16.9901 18 14.9404V12C18 11.7061 17.8281 11.4384 17.5605 11.3174ZM16.5 14.9404C16.5 15.5487 15.3726 16.1757 14.5 16.4657V11.5742L16.5 12.4834V14.9404Z"
          fill={secondaryfill}
        />
        <path
          d="M10.8196 9.95151C10.0136 10.3169 9.5 11.1203 9.5 12V14.9404C9.5 15.7465 9.75704 16.4163 10.1223 16.9619C9.76012 16.9865 9.38577 17 8.99999 17C6.99283 17 5.29503 16.6354 4.01259 16.2313C2.74425 15.8317 2.05162 14.4186 2.60517 13.1674C3.69058 10.7157 6.14167 9 8.99999 9C9.96226 9 10.8784 9.19445 11.7118 9.54598L10.8196 9.95151Z"
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

export default UserShield;
