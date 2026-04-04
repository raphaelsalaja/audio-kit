import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHairBadge({
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
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 6.5C5 4.29093 6.79082 2.5 9 2.5C11.2092 2.5 13 4.29093 13 6.5C13 8.70907 11.2092 10.5 9 10.5C6.79082 10.5 5 8.70907 5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.75001 6.50001C6.23701 6.50001 5.74301 6.42704 5.27001 6.30104L5.01001 6.21536C5.15599 4.13912 6.88657 2.5 9.00004 2.5C10.0632 2.5 11.0294 2.91475 11.7458 3.59125C12.2872 4.10249 12.6859 4.76322 12.8759 5.5074C11.9825 5.56114 11.2946 5.14155 10.8842 4.73921C9.83953 5.82383 8.37505 6.50001 6.75001 6.50001Z"
          fill={fill}
        />
        <path
          d="M9 14.75C9 14.3358 9.33579 14 9.75 14H12C12.4142 14 12.75 14.3358 12.75 14.75C12.75 15.1642 12.4142 15.5 12 15.5H9.75C9.33579 15.5 9 15.1642 9 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UserShortHairBadge;
