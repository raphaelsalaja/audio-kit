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
          d="M3.55972 3.16175C3.68759 3.06047 3.84924 3 4.02502 3H13.975C14.1557 3 14.3214 3.0639 14.4509 3.17032C14.5015 3.21183 14.5468 3.26004 14.5853 3.314C14.623 3.3667 14.6541 3.42448 14.6773 3.48612L17.0393 9.3912C17.2265 9.8591 17.1289 10.4546 16.6835 10.8189C15.1125 12.1035 13.0415 12.0971 11.3633 10.835C10.8943 10.4824 10.77 9.87124 10.9619 9.38154L12.8755 4.5H5.12454L7.03805 9.38148C7.22996 9.87119 7.10568 10.4824 6.63674 10.835C4.95849 12.0971 2.88757 12.1036 1.31662 10.819C0.871273 10.4547 0.773549 9.85915 0.960722 9.39126L3.32285 3.4859C3.34381 3.43018 3.37122 3.37762 3.40416 3.32912C3.44749 3.26519 3.50011 3.20889 3.55972 3.16175ZM12.7226 9L13.9821 5.78707L15.2672 9H12.7226ZM4.01793 5.78707L2.73277 9H5.27738L4.01793 5.78707Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V13.25C8.25 14.2165 7.46649 15 6.5 15H4.75C4.33579 15 4 15.3358 4 15.75C4 16.1642 4.33579 16.5 4.75 16.5H6.5H9H11.5H13.25C13.6642 16.5 14 16.1642 14 15.75C14 15.3358 13.6642 15 13.25 15H11.5C10.5335 15 9.75 14.2165 9.75 13.25V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Scale;
