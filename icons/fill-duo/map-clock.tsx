import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapClock({
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
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={fill}
        />
        <path
          d="M11.818 3.9602V8.95088C9.86694 9.7966 8.5 11.7409 8.5 14C8.5 14.304 8.52476 14.6023 8.57236 14.893L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.818 3.9602V8.95088C12.4871 8.66083 13.225 8.5 14 8.5C15.1062 8.5 16.1369 8.82773 17 9.39123V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.853 3.95822 11.8356 3.96017 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapClock;
