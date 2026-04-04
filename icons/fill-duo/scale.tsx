import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scale({
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
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V13.25C8.25 14.2165 7.46649 15 6.5 15H4.75C4.33579 15 4 15.3358 4 15.75C4 16.1642 4.33579 16.5 4.75 16.5H6.5H9H11.5H13.25C13.6642 16.5 14 16.1642 14 15.75C14 15.3358 13.6642 15 13.25 15H11.5C10.5335 15 9.75 14.2165 9.75 13.25V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.27502 3.75C3.27502 3.33579 3.61081 3 4.02502 3H13.975C14.3892 3 14.725 3.33579 14.725 3.75C14.725 4.16421 14.3892 4.5 13.975 4.5H4.02502C3.61081 4.5 3.27502 4.16421 3.27502 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.6714 3.47146C14.5571 3.18584 14.2801 2.99894 13.9724 3C13.6648 3.00107 13.389 3.18988 13.2768 3.47628L10.9619 9.38154C10.77 9.87124 10.8943 10.4824 11.3633 10.835C13.0415 12.0971 15.1125 12.1035 16.6835 10.8189C17.1289 10.4546 17.2265 9.8591 17.0393 9.3912L14.6714 3.47146ZM12.7226 9L13.9821 5.78707L15.2672 9H12.7226Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.72325 3.47628C4.61098 3.18988 4.3352 3.00107 4.02758 3C3.71995 2.99894 3.44287 3.18584 3.32862 3.47146L0.960722 9.39126C0.773549 9.85915 0.871273 10.4547 1.31662 10.819C2.88757 12.1036 4.95849 12.0971 6.63674 10.835C7.10568 10.4824 7.22996 9.87119 7.03805 9.38148L4.72325 3.47628ZM2.73277 9L4.01793 5.78707L5.27738 9H2.73277Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Scale;
