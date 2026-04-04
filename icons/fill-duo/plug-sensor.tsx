import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugSensor({
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
          d="M11.4747 6.52532C10.1106 5.16122 7.88943 5.16122 6.52533 6.52532C6.23243 6.81822 5.75756 6.81822 5.46467 6.52532C5.17177 6.23243 5.17177 5.75756 5.46467 5.46466C7.41456 3.51477 10.5854 3.51477 12.5353 5.46466C12.8282 5.75756 12.8282 6.23243 12.5353 6.52532C12.2424 6.81822 11.7676 6.81822 11.4747 6.52532Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 10.8464 16.3687 12.5405 15.3208 13.8925C15.067 14.2198 14.5959 14.2795 14.2685 14.0258C13.9412 13.772 13.8815 13.3009 14.1352 12.9735C14.9893 11.8715 15.5 10.4976 15.5 9C15.5 5.41021 12.5898 2.5 9 2.5C5.41021 2.5 2.5 5.41021 2.5 9C2.5 10.4978 3.01076 11.8726 3.86461 12.9733C4.11849 13.3006 4.05898 13.7717 3.73169 14.0256C3.40439 14.2795 2.93326 14.22 2.67939 13.8927C1.63124 12.5414 1 10.8462 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 9C11.5 8.58579 11.1642 8.25 10.75 8.25C10.3358 8.25 10 8.58579 10 9V11H8V9C8 8.58579 7.66421 8.25 7.25 8.25C6.83579 8.25 6.5 8.58579 6.5 9V11H6.25C5.55979 11 5 11.5598 5 12.25V13C5 15.2092 6.79079 17 9 17C11.2092 17 13 15.2092 13 13V12.25C13 11.5598 12.4402 11 11.75 11H11.5V9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PlugSensor;
