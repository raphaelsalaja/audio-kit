import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckHeart({
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
          d="M1.20878 7.4655C1.84068 7.95542 2.42642 8.2814 2.75293 8.44892C3.14444 8.64987 3.57172 8.75034 3.99899 8.75025C4.42627 8.75034 4.85355 8.64987 5.24506 8.44892C5.70825 8.21128 6.69312 7.65473 7.5914 6.76367C8.32468 6.03632 9.15471 4.94077 9.4225 3.5C9.46717 3.25959 9.49658 3.00956 9.50781 2.75H10.25C11.3546 2.75 12.25 3.64543 12.25 4.75V9.25H17.25V11.75C17.25 12.8546 16.3546 13.75 15.25 13.75H13.9823C13.861 12.9019 13.1316 12.25 12.25 12.25C11.3684 12.25 10.639 12.9019 10.5177 13.75H6.23228C6.11097 12.9019 5.38162 12.25 4.5 12.25C3.61838 12.25 2.88903 12.9019 2.76772 13.75H2.75C1.64543 13.75 0.75 12.8546 0.75 11.75C0.75 11.3502 0.806697 7.15376 1.20878 7.4655Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.781 6.447C3.919 6.518 4.08 6.518 4.218 6.447C4.947 6.073 7.249 4.717 7.249 2.513C7.253 1.545 6.458 0.756 5.472 0.75C4.879 0.757 4.328 1.051 3.999 1.536C3.67 1.052 3.118 0.758 2.526 0.75C1.541 0.756 0.746001 1.544 0.749001 2.513C0.749001 4.718 3.053 6.073 3.781 6.447Z"
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
          d="M3.781 6.447C3.919 6.518 4.08 6.518 4.218 6.447C4.947 6.073 7.249 4.717 7.249 2.513C7.253 1.545 6.458 0.756 5.472 0.75C4.879 0.757 4.328 1.051 3.999 1.536C3.67 1.052 3.118 0.758 2.526 0.75C1.541 0.756 0.746001 1.544 0.749001 2.513C0.749001 4.718 3.053 6.073 3.781 6.447Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 2.75C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V8.06464"
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

export default TruckHeart;
