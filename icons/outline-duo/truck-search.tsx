import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckSearch({
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
          d="M4.16557 7.34759C3.79381 7.44701 3.40308 7.50001 2.99997 7.50001C2.31207 7.50001 1.66023 7.34566 1.07718 7.0697C0.645939 6.8656 0.749972 11.4527 0.749972 12C0.749972 13.1046 1.6454 14 2.74997 14H2.76769C2.889 13.1519 3.61835 12.5 4.49997 12.5C5.38159 12.5 6.11094 13.1519 6.23225 14H10.5177C10.639 13.1519 11.3684 12.5 12.25 12.5C13.1316 12.5 13.861 13.1519 13.9823 14H15.25C16.3546 14 17.25 13.1046 17.25 12V9.50001H12.25V5.00001C12.25 3.89544 11.3546 3.00001 10.25 3.00001C9.95512 3.00966 7.51295 2.89077 7.49306 3.25165C7.47573 3.56599 7.42615 3.87173 7.34755 4.16561L7.84096 4.65902C8.71964 5.5377 8.71964 6.96232 7.84096 7.841C6.96228 8.71968 5.53766 8.71968 4.65898 7.841L4.16557 7.34759Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
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
          d="M3 5.25C4.24264 5.25 5.25 4.24264 5.25 3C5.25 1.75736 4.24264 0.75 3 0.75C1.75736 0.75 0.75 1.75736 0.75 3C0.75 4.24264 1.75736 5.25 3 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.59003 4.59003L6.25003 6.25003"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.24152 3.25H10.25C11.355 3.25 12.25 4.145 12.25 5.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.768 14.25H2.75C1.645 14.25 0.75 13.355 0.75 12.25V7.74261"
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

export default TruckSearch;
