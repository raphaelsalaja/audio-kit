import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryCharging({
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
          d="M1 6.25C1 4.73128 2.23069 3.5 3.75 3.5H13.75C15.2693 3.5 16.5 4.73128 16.5 6.25V11.75C16.5 13.2687 15.2693 14.5 13.75 14.5H3.75C2.23069 14.5 1 13.2687 1 11.75V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 11H17.25C17.6642 11 18 10.6642 18 10.25V7.75C18 7.33579 17.6642 7 17.25 7H16.5V11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.583 3.07801C10.9107 3.24037 11.0734 3.6153 10.9684 3.96552L9.75803 8H11.75C12.0321 8 12.2903 8.15829 12.4183 8.40967C12.5463 8.66105 12.5225 8.96299 12.3566 9.19113L8.35656 14.6911C8.1415 14.9868 7.74456 15.0844 7.41696 14.922C7.08935 14.7596 6.92657 14.3847 7.03163 14.0345L8.24198 10H6.25C5.96791 10 5.70967 9.84172 5.58167 9.59034C5.45366 9.33896 5.47753 9.03702 5.64345 8.80888L9.64345 3.30888C9.85851 3.01318 10.2554 2.91564 10.583 3.07801Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BatteryCharging;
