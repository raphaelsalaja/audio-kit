import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RollerBlade({
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
          d="M1.47299 13C1.47299 11.0666 3.03956 9.5 4.97299 9.5C6.90642 9.5 8.47299 11.0666 8.47299 13C8.47299 14.9334 6.90642 16.5 4.97299 16.5C3.03956 16.5 1.47299 14.9334 1.47299 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.01968 7.59168L12.5557 2.05568C13.4916 1.11979 15.0084 1.11979 15.9443 2.05568C16.8802 2.99157 16.8802 4.50845 15.9443 5.44434L10.3923 10.9963L7.01968 7.59168Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.29266 8.70734C9.58555 9.00023 9.58555 9.47511 9.29266 9.768L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303C4.17678 13.2374 4.17678 12.7626 4.46967 12.4697L8.232 8.70734C8.52489 8.41445 8.99977 8.41445 9.29266 8.70734Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 7.5C4.25 7.08579 4.58579 6.75 5 6.75C8.45221 6.75 11.25 9.54779 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75C10.0858 13.75 9.75 13.4142 9.75 13C9.75 10.3762 7.62379 8.25 5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RollerBlade;
