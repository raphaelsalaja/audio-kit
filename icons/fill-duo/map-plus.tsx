import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPlus({
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
          d="M15.5 12.25C15.5 11.8358 15.1642 11.5 14.75 11.5C14.3358 11.5 14 11.8358 14 12.25V14H12.25C11.8358 14 11.5 14.3358 11.5 14.75C11.5 15.1642 11.8358 15.5 12.25 15.5H14V17.25C14 17.6642 14.3358 18 14.75 18C15.1642 18 15.5 17.6642 15.5 17.25V15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H15.5V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.818 3.9602V12.5414C10.782 12.7429 10 13.6551 10 14.75C10 14.9955 10.0393 15.2318 10.112 15.453L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.818 3.9602V12.5414C11.9578 12.5142 12.1022 12.5 12.25 12.5H12.5V12.25C12.5 11.0074 13.5073 10 14.75 10C15.9108 10 16.8792 10.8791 17 12.0078V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.853 3.95822 11.8356 3.96017 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapPlus;
