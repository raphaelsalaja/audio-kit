import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCrown({
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
          d="M5 6.5C5 4.29093 6.79082 2.5 9 2.5C11.2092 2.5 13 4.29093 13 6.5C13 8.70907 11.2092 10.5 9 10.5C6.79082 10.5 5 8.70907 5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.67435 0.325865C4.94553 0.194152 5.26922 0.237615 5.49605 0.436197L6.837 1.61016C6.93119 1.69256 7.07181 1.6926 7.16599 1.6102L8.507 0.436196C8.78982 0.1886 9.21224 0.188601 9.49506 0.436199L10.836 1.61016C10.9302 1.69256 11.0708 1.6926 11.165 1.6102L12.506 0.436198C12.6427 0.316488 12.8183 0.2505 13 0.2505H13.002C13.2078 0.2505 13.4045 0.33503 13.5461 0.484294C13.6877 0.633559 13.7618 0.834449 13.751 1.03992L12.9961 6.32209C11.6734 5.8987 10.4144 5.45931 9.00202 5.45931C7.59633 5.45931 6.26484 5.80855 5.005 6.40521L4.25306 1.03992C4.23721 0.738861 4.40317 0.457577 4.67435 0.325865Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserCrown;
