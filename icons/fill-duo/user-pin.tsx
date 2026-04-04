import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPin({
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
          d="M14.25 9.73682C12.3203 9.73682 10.75 11.3071 10.75 13.2368C10.75 15.8911 13.7607 17.5737 13.8896 17.644C14.0019 17.7055 14.1259 17.7368 14.25 17.7368C14.3741 17.7368 14.498 17.7056 14.6104 17.644C14.7393 17.5737 17.75 15.8911 17.75 13.2368C17.75 11.3071 16.1797 9.73682 14.25 9.73682ZM14.25 14.2368C13.6978 14.2368 13.25 13.789 13.25 13.2368C13.25 12.6846 13.6978 12.2368 14.25 12.2368C14.8022 12.2368 15.25 12.6845 15.25 13.2368C15.25 13.7891 14.8022 14.2368 14.25 14.2368Z"
          fill={fill}
        />
        <path
          d="M11.1426 9.32157C9.98993 10.2381 9.25 11.6523 9.25 13.2368C9.25 14.7773 9.94984 16.0165 10.6873 16.9006C10.1534 16.9553 9.59007 16.9868 8.99999 16.9868C6.99283 16.9868 5.29503 16.6223 4.01259 16.2182C2.74425 15.8185 2.05162 14.4054 2.60517 13.1542C3.69058 10.7025 6.14167 8.98682 8.99999 8.98682C9.74778 8.98682 10.4677 9.10425 11.1426 9.32157Z"
          fill={secondaryfill}
          fillOpacity="0.4"
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

export default UserPin;
