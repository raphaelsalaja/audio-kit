import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersLock({
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
          d="M13.5 11.2505C13.5 10.8367 13.8362 10.5005 14.25 10.5005C14.6638 10.5005 15 10.8367 15 11.2505V12.0005H13.5V11.2505ZM12 12.0182V11.2505C12 10.0083 13.0078 9.00049 14.25 9.00049C15.4922 9.00049 16.5 10.0083 16.5 11.2505V12.0182C17.3481 12.1395 18 12.8689 18 13.7505V15.2505C18 16.217 17.2165 17.0005 16.25 17.0005H12.25C11.2835 17.0005 10.5 16.217 10.5 15.2505V13.7505C10.5 12.8689 11.1519 12.1395 12 12.0182Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.05286 15.8376C8.4224 15.9383 7.73564 16.0005 7.00003 16.0005C5.26802 16.0005 3.80715 15.6556 2.71401 15.276C1.47805 14.8468 0.805407 13.4059 1.42474 12.181C2.45324 10.1468 4.56096 8.74951 7.00003 8.74951C8.39555 8.74951 9.68249 9.20724 10.7209 9.97963C10.6042 10.3037 10.5308 10.6484 10.5078 11.0068C9.60119 11.5833 8.99997 12.596 8.99997 13.7505V15.2505C8.99997 15.4509 9.01812 15.6472 9.05286 15.8376Z"
          fill={secondaryfill}
          fillOpacity="0.4"
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

export default UsersLock;
