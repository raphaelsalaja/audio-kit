import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPosition({
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
          d="M15.25 10C13.7313 10 12.5 11.2307 12.5 12.75C12.5 14.0092 13.3458 15.0702 14.5 15.3965V17.25C14.5 17.6642 14.8358 18 15.25 18C15.6642 18 16 17.6642 16 17.25V15.3965C17.1542 15.0702 18 14.0092 18 12.75C18 11.2307 16.7687 10 15.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.818 3.9602V10.2425C11.3037 10.9453 11 11.8121 11 12.75C11 13.9896 11.53 15.1036 12.3749 15.8797L12.1964 15.9194C11.8736 15.9906 11.5347 15.9702 11.22 15.856L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.818 3.9602V10.2425C12.5912 9.18596 13.8406 8.5 15.25 8.5C15.8738 8.5 16.4663 8.63438 17 8.87581V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.853 3.95822 11.8356 3.96017 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapPosition;
