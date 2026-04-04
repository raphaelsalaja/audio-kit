import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCap({
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
          d="M10.1728 6.94726C11.1503 6.8581 12.0962 6.6586 12.9977 6.36122C13.9312 6.05327 14.8171 5.64034 15.6413 5.13633C15.9947 4.92023 16.1059 4.45858 15.8898 4.1052C15.6737 3.75183 15.2121 3.64055 14.8587 3.85665C14.1721 4.27656 13.4368 4.62482 12.6632 4.89105C12.044 3.48313 10.6368 2.5 9.00002 2.5C6.8404 2.5 5.08058 4.21148 5.0027 6.35197C5.00231 6.36406 5.09783 6.39246 5.11163 6.39687C6.33827 6.7891 7.64609 7.00036 9 7.00049C9.39534 7.00049 9.78658 6.98249 10.1728 6.94726Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserCap;
