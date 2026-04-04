import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderHeart({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.37795C8.92702 15.262 8.58615 14.3844 8.51325 13.3711C8.49795 13.1584 8.48865 12.8893 8.51635 12.6029C8.68928 10.8148 10.1262 9.38625 11.9391 9.25917C12.1603 9.24366 12.3793 9.25065 12.5876 9.27503C13.0894 9.33375 13.5687 9.49396 13.999 9.74052C14.4292 9.49396 14.9085 9.33375 15.4103 9.27503C15.6187 9.25065 15.8376 9.24366 16.0589 9.25917C16.2086 9.26967 16.3558 9.28906 16.5 9.3168V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M13.7301 17.9332C13.8999 18.0224 14.0982 18.0224 14.268 17.9332C15.1652 17.4617 17.999 15.7522 17.999 12.9725C18.0034 11.7517 17.0253 10.7575 15.8124 10.7501C15.0827 10.7595 14.4044 11.1301 13.999 11.7408C13.5936 11.1301 12.9153 10.7595 12.1856 10.7501C10.9727 10.7575 9.99458 11.7517 9.99898 12.9725C9.99898 15.7522 12.8329 17.4616 13.7301 17.9332Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FolderHeart;
