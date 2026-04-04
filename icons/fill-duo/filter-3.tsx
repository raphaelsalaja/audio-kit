import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter3({
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
          d="M14.25 6H3.74997C3.46797 6 3.20997 6.158 3.08197 6.41C2.95397 6.662 2.97797 6.963 3.14397 7.191L6.99997 12.494V17.25C6.99997 17.52 7.14597 17.77 7.38097 17.903C7.49497 17.968 7.62297 18 7.74997 18C7.88397 18 8.01797 17.964 8.13597 17.893L10.636 16.393C10.862 16.258 11 16.014 11 15.75V12.494L14.856 7.191C15.022 6.963 15.045 6.661 14.918 6.41C14.791 6.159 14.532 6 14.25 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 2C9.552 2 10 1.551 10 1C10 0.449 9.552 0 9 0C8.448 0 8 0.449 8 1C8 1.551 8.448 2 9 2Z"
          fill={fill}
        />
        <path
          d="M5.5 2C6.052 2 6.5 1.551 6.5 1C6.5 0.449 6.052 0 5.5 0C4.948 0 4.5 0.449 4.5 1C4.5 1.551 4.948 2 5.5 2Z"
          fill={fill}
        />
        <path
          d="M12.5 2C13.052 2 13.5 1.551 13.5 1C13.5 0.449 13.052 0 12.5 0C11.948 0 11.5 0.449 11.5 1C11.5 1.551 11.948 2 12.5 2Z"
          fill={fill}
        />
        <path
          d="M10.75 4.5C11.302 4.5 11.75 4.051 11.75 3.5C11.75 2.949 11.302 2.5 10.75 2.5C10.198 2.5 9.75 2.949 9.75 3.5C9.75 4.051 10.198 4.5 10.75 4.5Z"
          fill={fill}
        />
        <path
          d="M7.25 4.5C7.802 4.5 8.25 4.051 8.25 3.5C8.25 2.949 7.802 2.5 7.25 2.5C6.698 2.5 6.25 2.949 6.25 3.5C6.25 4.051 6.698 4.5 7.25 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Filter3;
