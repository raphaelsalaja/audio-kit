import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreativeCommons({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 7.5C6.17121 7.5 5.5 8.17121 5.5 9C5.5 9.82879 6.17121 10.5 7 10.5C7.24102 10.5 7.46669 10.4438 7.66548 10.3447C8.03621 10.16 8.48652 10.3108 8.67127 10.6815C8.85601 11.0522 8.70525 11.5025 8.33452 11.6873C7.93131 11.8882 7.47698 12 7 12C5.34279 12 4 10.6572 4 9C4 7.34279 5.34279 6 7 6C7.47697 6 7.9313 6.11178 8.33452 6.31272C8.70525 6.49747 8.85601 6.94778 8.67127 7.31851C8.48652 7.68924 8.03621 7.84001 7.66548 7.65526C7.4667 7.5562 7.24103 7.5 7 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 7.5C11.1712 7.5 10.5 8.17121 10.5 9C10.5 9.82879 11.1712 10.5 12 10.5C12.241 10.5 12.4667 10.4438 12.6655 10.3447C13.0362 10.16 13.4865 10.3108 13.6713 10.6815C13.856 11.0522 13.7052 11.5025 13.3345 11.6873C12.9313 11.8882 12.477 12 12 12C10.3428 12 9 10.6572 9 9C9 7.34279 10.3428 6 12 6C12.477 6 12.9313 6.11178 13.3345 6.31272C13.7052 6.49747 13.856 6.94778 13.6713 7.31851C13.4865 7.68924 13.0362 7.84001 12.6655 7.65526C12.4667 7.5562 12.241 7.5 12 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreativeCommons;
