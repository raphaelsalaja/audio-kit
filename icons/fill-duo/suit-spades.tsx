import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitSpades({
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
          d="M12.451 5.522C11.123 4.492 9.75 3.427 9.75 1.75C9.75 1.336 9.414 1 9 1C8.586 1 8.25 1.336 8.25 1.75C8.25 3.427 6.877 4.492 5.549 5.522C5.058 5.903 4.594 6.263 4.212 6.647C3.257 7.607 2.725 8.787 2.751 9.884C2.772 10.756 3.13 11.535 3.788 12.138C4.405 12.703 5.154 12.999 5.963 12.999C6.017 12.999 6.072 12.998 6.127 12.995C7.099 12.948 8.099 12.486 9 11.679C9.901 12.486 10.901 12.948 11.873 12.995C12.746 13.034 13.554 12.741 14.212 12.138C14.87 11.535 15.228 10.756 15.249 9.884C15.274 8.787 14.742 7.607 13.788 6.647C13.406 6.262 12.942 5.902 12.451 5.522Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.92872 12.4503C8.29557 12.2464 8.65504 11.988 9 11.679C9.34495 11.988 9.70442 12.2464 10.0713 12.4503C10.7449 14.132 12.3699 15.1915 13.905 15.516C14.281 15.596 14.536 15.946 14.496 16.328C14.456 16.71 14.134 17 13.75 17H4.24999C3.86599 17 3.54399 16.71 3.50399 16.328C3.46499 15.946 3.71999 15.596 4.09499 15.516C5.63003 15.1915 7.25511 14.132 7.92872 12.4503Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SuitSpades;
