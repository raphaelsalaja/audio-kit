import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckPin({
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
          d="M2.75 13.75C1.64543 13.75 0.75 12.8546 0.75 11.75C0.75 11.4484 0.75452 8.03888 1.23376 8.41881C1.44232 8.58415 1.63528 8.72352 1.79935 8.83582C1.99951 8.97285 2.20372 9.10489 2.41637 9.22183C3.09055 9.59178 3.90945 9.59178 4.58363 9.22183C5.25503 8.8526 5.87783 8.36951 6.42996 7.84156C7.26888 7.0394 8.5 5.54696 8.5 3.49997C8.5 3.29259 8.48738 3.08816 8.46286 2.88741C8.43291 2.64217 10.0776 2.74997 10.25 2.74997C11.3546 2.74997 12.25 3.6454 12.25 4.74997V9.24997H17.25V11.75C17.25 12.8546 16.3546 13.75 15.25 13.75H13.9823C13.861 12.9019 13.1316 12.25 12.25 12.25C11.3684 12.25 10.639 12.9019 10.5177 13.75H6.23228C6.11097 12.9019 5.38162 12.25 4.5 12.25C3.61838 12.25 2.88903 12.9019 2.76772 13.75H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 7.25C3.5 7.25 0.75 5.741 0.75 3.5C0.75 1.981 1.981 0.75 3.5 0.75C5.019 0.75 6.25 1.981 6.25 3.5C6.25 5.741 3.5 7.25 3.5 7.25Z"
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
          d="M3.5 4.25C3.91421 4.25 4.25 3.91421 4.25 3.5C4.25 3.08579 3.91421 2.75 3.5 2.75C3.08579 2.75 2.75 3.08579 2.75 3.5C2.75 3.91421 3.08579 4.25 3.5 4.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.5 7.25C3.5 7.25 0.75 5.741 0.75 3.5C0.75 1.981 1.981 0.75 3.5 0.75C5.019 0.75 6.25 1.981 6.25 3.5C6.25 5.741 3.5 7.25 3.5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.20081 2.75H10.25C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.768 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V8.98999"
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
      </g>
    </svg>
  );
}

export default TruckPin;
