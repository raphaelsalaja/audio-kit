import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapLock({
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
          d="M13.5 12.25C13.5 11.8362 13.8362 11.5 14.25 11.5C14.6638 11.5 15 11.8362 15 12.25V13H13.5V12.25ZM12 13.0177V12.25C12 11.0078 13.0078 10 14.25 10C15.4922 10 16.5 11.0078 16.5 12.25V13.0177C17.3479 13.1391 18 13.8687 18 14.75V16.25C18 17.2162 17.2162 18 16.25 18H12.25C11.2838 18 10.5 17.2162 10.5 16.25V14.75C10.5 13.8687 11.1521 13.1391 12 13.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.818 3.9602V9.39573C11.0693 10.0344 10.5748 10.9624 10.5078 12.0064C9.60133 12.583 9 13.5957 9 14.75V15.0486L6.268 14.055C6.24185 14.0455 6.21494 14.0406 6.18848 14.0399V2.03922C6.38856 2.03983 6.58873 2.07459 6.77998 2.14404L11.732 3.94503C11.7603 3.95529 11.7895 3.96025 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M6.18848 14.0399V2.03922C6.05932 2.03883 5.93021 2.05266 5.80355 2.08058L2.37062 2.84379C1.56982 3.02102 1 3.73186 1 4.552V13.004C1 14.1237 2.03642 14.9552 3.12983 14.7121L6.1302 14.0456C6.14903 14.0413 6.16863 14.0394 6.18848 14.0399Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.818 3.9602V9.39573C12.4728 8.83721 13.3221 8.5 14.25 8.5C15.3364 8.5 16.315 8.96227 17 9.7008V4.996C17 3.87625 15.9636 3.04484 14.8702 3.2879L11.8698 3.95443C11.853 3.95822 11.8356 3.96017 11.818 3.9602Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MapLock;
