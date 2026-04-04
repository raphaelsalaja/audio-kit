import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderMusic({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.49976V15.75C9.49976 13.9376 10.7897 12.4233 12.4998 12.0752V10.75C12.4998 9.83518 13.0537 9.01269 13.8988 8.66729C14.742 8.3227 15.714 8.52081 16.3551 9.17401L16.5 9.30793V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M17.5594 11.8168C17.1619 11.6366 16.7801 11.4213 16.4227 11.1772C16.0155 10.8994 15.6327 10.5791 15.285 10.2251C15.0711 10.0068 14.7469 9.9409 14.4666 10.0557C14.1844 10.1709 13.9998 10.4453 13.9998 10.75V13.6382C13.764 13.5541 13.514 13.5 13.2498 13.5C12.0096 13.5 10.9998 14.5093 10.9998 15.75C10.9998 16.9907 12.0096 18 13.2498 18C14.49 18 15.4998 16.9907 15.4998 15.75V12.3633C15.942 12.6697 16.4345 12.9536 16.9402 13.1831C17.3152 13.354 17.7615 13.1875 17.9324 12.8101C18.1043 12.4327 17.9373 11.9882 17.5594 11.8168Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FolderMusic;
