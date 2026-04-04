import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserMsg({
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
          d="M12.75 18C12.6465 18 12.5425 17.9785 12.4443 17.9351C12.1743 17.8145 12 17.5459 12 17.25V15.9863C10.8765 15.8613 10 14.9062 10 13.75V12.25C10 11.0093 11.0093 10 12.25 10H15.75C16.9907 10 18 11.0093 18 12.25V13.75C18 14.9907 16.9907 16 15.75 16H15.2642L13.251 17.8081C13.1109 17.9341 12.9317 18 12.75 18Z"
          fill={fill}
        />
        <path
          d="M10.2095 9.10431C9.81672 9.03575 9.4126 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.29503 16.6354 6.99283 17 8.99999 17C9.44737 17 9.87937 16.9819 10.2948 16.9493C9.21885 16.29 8.5 15.104 8.5 13.75V12.25C8.5 10.9331 9.18091 9.77341 10.2095 9.10431Z"
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

export default UserMsg;
