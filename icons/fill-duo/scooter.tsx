import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scooter({
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
          d="M14.1431 3.00766C14.5122 2.9545 14.8643 3.18061 14.9695 3.53838C15.1495 4.15014 15.4449 4.85476 15.7575 5.60041C15.7815 5.65767 15.8056 5.71517 15.8297 5.77288C16.1547 6.54924 16.4983 7.38339 16.6569 8.08451C16.9089 9.19822 17.0222 10.4246 16.9999 11.7625C16.9931 12.1718 16.6593 12.5 16.25 12.5H1.75C1.33579 12.5 1 12.1642 1 11.75C1 8.57439 3.57439 6 6.75 6H8.25C8.66421 6 9 6.33579 9 6.75V10.5H11.25C12.4927 10.5 13.5 9.49269 13.5 8.25V3.75C13.5 3.37708 13.774 3.06081 14.1431 3.00766Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.063 4.5H11.25C10.8358 4.5 10.5 4.16421 10.5 3.75C10.5 3.33579 10.8358 3 11.25 3H13.2676C13.6134 2.4022 14.2597 2 15 2H16.4C16.7314 2 17 2.26863 17 2.6V5.4C17 5.73137 16.7314 6 16.4 6H15C14.0681 6 13.285 5.36261 13.063 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.8703 12.5C15.1129 12.8591 15.25 13.284 15.25 13.75C15.25 14.9926 14.2426 16 13 16C11.7574 16 10.75 14.9926 10.75 13.75C10.75 13.2872 10.8897 12.857 11.1294 12.4993"
          fill={fill}
        />
        <path
          d="M6.8703 12.5C7.1129 12.8591 7.25 13.284 7.25 13.75C7.25 14.9926 6.2426 16 5 16C3.7574 16 2.75 14.9926 2.75 13.75C2.75 13.2872 2.8897 12.857 3.1294 12.4993"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Scooter;
