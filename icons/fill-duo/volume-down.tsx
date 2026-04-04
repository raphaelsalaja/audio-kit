import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeDown({
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
          d="M12.0759 1.61119C12.9072 1.07941 14 1.67539 14 2.664V15.337C14 16.3256 12.9072 16.9216 12.0759 16.3898L6.78051 13H3.75C2.50779 13 1.5 11.9922 1.5 10.75V7.25C1.5 6.00778 2.50779 5 3.75 5H6.78056L12.0759 1.61119Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.7822 7.17258C16.0983 7.07665 16.4399 7.19882 16.6235 7.47344C17.2398 8.39538 17.2398 9.60456 16.6235 10.5265C16.4399 10.8011 16.0983 10.9233 15.7822 10.8274C15.4661 10.7314 15.25 10.44 15.25 10.1097V7.89026C15.25 7.55993 15.4661 7.2685 15.7822 7.17258Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default VolumeDown;
