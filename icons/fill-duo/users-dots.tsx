import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersDots({
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
          d="M13 15.0005C12.449 15.0005 12 14.5525 12 14.0005C12 13.4485 12.449 13.0005 13 13.0005C13.551 13.0005 14 13.4485 14 14.0005C14 14.5525 13.551 15.0005 13 15.0005Z"
          fill={fill}
        />
        <path
          d="M10 15.0005C9.449 15.0005 9 14.5525 9 14.0005C9 13.4485 9.449 13.0005 10 13.0005C10.551 13.0005 11 13.4485 11 14.0005C11 14.5525 10.551 15.0005 10 15.0005Z"
          fill={fill}
        />
        <path
          d="M1.42474 12.181C2.45324 10.1468 4.56096 8.74951 7.00003 8.74951C9.15644 8.74951 11.0536 9.84245 12.1751 11.5005H9.99997C8.62152 11.5005 7.49997 12.6191 7.49997 14.0005C7.49997 14.7745 7.85211 15.4661 8.40425 15.9245C7.95938 15.9728 7.49056 16.0005 7.00003 16.0005C5.26802 16.0005 3.80715 15.6556 2.71401 15.276C1.47805 14.8468 0.805407 13.4059 1.42474 12.181Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 15.0005C15.449 15.0005 15 14.5525 15 14.0005C15 13.4485 15.449 13.0005 16 13.0005C16.551 13.0005 17 13.4485 17 14.0005C17 14.5525 16.551 15.0005 16 15.0005Z"
          fill={fill}
        />
        <path
          d="M4.25 4.75049C4.25 3.2313 5.48133 2.00049 7 2.00049C8.51867 2.00049 9.75 3.2313 9.75 4.75049C9.75 6.26968 8.51867 7.50049 7 7.50049C5.48133 7.50049 4.25 6.26968 4.25 4.75049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5503 7.08782C10.9712 7.34943 11.468 7.50049 12 7.50049C13.5187 7.50049 14.75 6.26968 14.75 4.75049C14.75 3.2313 13.5187 2.00049 12 2.00049C11.468 2.00049 10.9712 2.15155 10.5503 2.41315C10.9926 3.08366 11.25 3.88692 11.25 4.75049C11.25 5.61405 10.9926 6.41732 10.5503 7.08782Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UsersDots;
