import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapCursor({
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
          d="M13.2 17.9999C12.7693 17.9999 12.3826 17.7313 12.2332 17.3251L10.0633 11.3837C9.92356 11.0028 10.0144 10.5888 10.3016 10.3017C10.5887 10.0155 11.0008 9.9247 11.3836 10.0634L17.324 12.2333C17.7381 12.3847 18.0086 12.7821 17.9998 13.2226C17.99 13.6621 17.7019 14.0478 17.284 14.1816L14.9334 14.9336L14.1805 17.2842C14.0477 17.7022 13.6619 17.9903 13.2225 18L13.2 17.9999Z"
          fill={fill}
        />
        <path
          d="M11.818 3.9602V8.62672C10.9121 8.33006 9.92431 8.55979 9.24259 9.23937C8.54159 9.94013 8.31468 10.9709 8.65458 11.899L9.92813 15.3861L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.8181 3.9602V8.62672L11.8946 8.65312L17 10.518V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.8531 3.95822 11.8357 3.96017 11.8181 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapCursor;
