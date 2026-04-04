import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckPen({
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
          d="M10.25 3.07129C11.3546 3.07129 12.25 3.89544 12.25 5V9.5H17.25V12C17.25 13.1046 16.3546 14 15.25 14H13.9824C13.8611 13.1519 13.1316 12.5 12.25 12.5C11.3684 12.5 10.6389 13.1519 10.5176 14H6.23242C6.11111 13.1519 5.38162 12.5 4.5 12.5C3.61838 12.5 2.88889 13.1519 2.76758 14H2.75C1.64543 14 0.75 13.1046 0.75 12V9.24805C0.955509 9.24817 1.16287 9.22184 1.36621 9.16406L4.16211 8.36816L4.29883 8.32422C4.61466 8.21195 4.90091 8.03068 5.13672 7.79492L8.29785 4.63379C8.3721 4.5528 8.45001 4.47385 8.51953 4.38867C8.84114 3.99435 9.05489 3.54236 9.16406 3.07129H10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5459 6.20419L6.70709 3.043C7.09759 2.6525 7.09759 2.0193 6.70709 1.6288L6.12131 1.043C5.73081 0.652496 5.09759 0.652496 4.70709 1.043L1.5459 4.20419L0.750092 7.00009L3.5459 6.20419Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.519 14.25H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 6.25H14.454C14.794 6.25 15.111 6.423 15.295 6.709L17.091 9.503C17.195 9.664 17.25 9.852 17.25 10.044V12.25C17.25 13.355 16.355 14.25 15.25 14.25H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.75H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.8952 3.25H10.25C11.355 3.25 12.25 4.145 12.25 5.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 14.25H2.75C1.645 14.25 0.75 13.355 0.75 12.25V10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5459 6.20419L6.70709 3.043C7.09759 2.6525 7.09759 2.0193 6.70709 1.6288L6.12131 1.043C5.73081 0.652496 5.09759 0.652496 4.70709 1.043L1.5459 4.20419L0.750092 7.00009L3.5459 6.20419Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 16.25C5.4665 16.25 6.25 15.4665 6.25 14.5C6.25 13.5335 5.4665 12.75 4.5 12.75C3.5335 12.75 2.75 13.5335 2.75 14.5C2.75 15.4665 3.5335 16.25 4.5 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25C13.2165 16.25 14 15.4665 14 14.5C14 13.5335 13.2165 12.75 12.25 12.75C11.2835 12.75 10.5 13.5335 10.5 14.5C10.5 15.4665 11.2835 16.25 12.25 16.25Z"
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

export default TruckPen;
