import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckAlert({
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
          d="M10.25 3.15527C11.3545 3.15527 12.2499 4.05078 12.25 5.15527V9.25H17.25V11.75C17.25 12.8546 16.3546 13.75 15.25 13.75H13.9824C13.8611 12.9019 13.1316 12.25 12.25 12.25C11.3684 12.25 10.6389 12.9019 10.5176 13.75H6.23242C6.11111 12.9019 5.38162 12.25 4.5 12.25C3.61838 12.25 2.88889 12.9019 2.76758 13.75H2.75C1.64543 13.75 0.931641 12.8546 0.931641 11.75V9.62891C1.62064 9.82026 2.4658 9.85511 3.13672 9.56641C3.54559 9.98744 4.11675 10.25 4.75 10.25C5.3835 10.25 5.95438 9.98675 6.36328 9.56543C6.63553 9.68267 6.93461 9.74999 7.25 9.75H7.68262C10.1667 9.74997 11.6999 7.09843 10.5449 4.96094L9.40527 3.15527H10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.519 13.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75H14.454C14.794 5.75 15.111 5.923 15.295 6.209L17.091 9.003C17.195 9.164 17.25 9.352 17.25 9.544V11.75C17.25 12.855 16.355 13.75 15.25 13.75H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0426 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V10.3543"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 15.75C5.4665 15.75 6.25 14.9665 6.25 14C6.25 13.0335 5.4665 12.25 4.5 12.25C3.5335 12.25 2.75 13.0335 2.75 14C2.75 14.9665 3.5335 15.75 4.5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.2165 15.75 14 14.9665 14 14C14 13.0335 13.2165 12.25 12.25 12.25C11.2835 12.25 10.5 13.0335 10.5 14C10.5 14.9665 11.2835 15.75 12.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 7.49998H7.683C8.4711 7.49998 8.94951 6.63079 8.52781 5.96489L5.59481 1.33388C5.20221 0.713982 4.2978 0.713982 3.9052 1.33388L0.972202 5.96489C0.550502 6.63069 1.02891 7.49998 1.81701 7.49998H2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 4V6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 8.75C5.16421 8.75 5.5 8.41421 5.5 8C5.5 7.58579 5.16421 7.25 4.75 7.25C4.33579 7.25 4 7.58579 4 8C4 8.41421 4.33579 8.75 4.75 8.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default TruckAlert;
