import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hotspot({
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
          d="M9 2.5C5.41021 2.5 2.5 5.41021 2.5 9C2.5 11.3239 3.71875 13.3627 5.55522 14.5135C5.90623 14.7334 6.01248 15.1962 5.79254 15.5472C5.57261 15.8982 5.10978 16.0045 4.75878 15.7845C2.50325 14.3713 1 11.8621 1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 11.8621 15.4967 14.3713 13.2412 15.7845C12.8902 16.0045 12.4274 15.8982 12.2075 15.5472C11.9875 15.1962 12.0938 14.7334 12.4448 14.5135C14.2813 13.3627 15.5 11.3239 15.5 9C15.5 5.41021 12.5898 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 5.5C7.06721 5.5 5.5 7.06721 5.5 9C5.5 10.2502 6.15505 11.3488 7.14487 11.9682C7.49599 12.188 7.60249 12.6508 7.38275 13.0019C7.16301 13.353 6.70023 13.4595 6.34911 13.2398C4.93893 12.3572 4 10.7878 4 9C4 6.23879 6.23879 4 9 4C11.7612 4 14 6.23879 14 9C14 10.7891 13.0597 12.3573 11.6511 13.2396C11.3001 13.4595 10.8373 13.3532 10.6174 13.0021C10.3975 12.6511 10.5038 12.1883 10.8549 11.9684C11.8443 11.3487 12.5 10.2509 12.5 9C12.5 7.06721 10.9328 5.5 9 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 9C7 7.89579 7.89579 7 9 7C10.1042 7 11 7.89579 11 9C11 10.1042 10.1042 11 9 11C7.89579 11 7 10.1042 7 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hotspot;
