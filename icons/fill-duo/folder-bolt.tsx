import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderBolt({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H11.3357C11.1103 15.8179 10.9187 15.5911 10.7751 15.3282C10.3807 14.6058 10.4123 13.7256 10.8573 13.0333L13.1073 9.53329C13.7149 8.58814 14.9267 8.23612 15.9461 8.70859C16.1523 8.80416 16.3379 8.92755 16.5 9.07247V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M15.3154 10.0695C15.6552 10.227 15.8267 10.6111 15.7172 10.9692L15.0965 13H16.75C17.0244 13 17.2768 13.1498 17.4083 13.3906C17.5398 13.6314 17.5292 13.9248 17.3809 14.1556L15.1309 17.6556C14.9284 17.9706 14.5244 18.088 14.1846 17.9305C13.8448 17.773 13.6733 17.3889 13.7828 17.0308L14.4035 15H12.75C12.4756 15 12.2232 14.8502 12.0917 14.6094C11.9602 14.3686 11.9708 14.0752 12.1191 13.8444L14.3691 10.3444C14.5716 10.0294 14.9756 9.91204 15.3154 10.0695Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderBolt;
