import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapDownload({
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
          d="M14 12.25C14 11.8358 13.6642 11.5 13.25 11.5C12.8358 11.5 12.5 11.8358 12.5 12.25V15.4393L11.2803 14.2197C10.9874 13.9268 10.5126 13.9268 10.2197 14.2197C9.92678 14.5126 9.92678 14.9874 10.2197 15.2803L12.7197 17.7803C13.0126 18.0732 13.4874 18.0732 13.7803 17.7803L16.2803 15.2803C16.5732 14.9874 16.5732 14.5126 16.2803 14.2197C15.9874 13.9268 15.5126 13.9268 15.2197 14.2197L14 15.4393V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.818 3.9602V10.5144C11.3184 10.9271 11 11.5514 11 12.25V12.5138C10.344 12.4409 9.66204 12.656 9.15901 13.159C8.68969 13.6283 8.47104 14.2534 8.50307 14.8678L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.818 3.9602V10.5144C12.207 10.1931 12.706 10 13.25 10C14.4926 10 15.5 11.0074 15.5 12.25V12.5138C16.0173 12.4563 16.5508 12.5779 17 12.8787V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.853 3.95822 11.8356 3.96017 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapDownload;
