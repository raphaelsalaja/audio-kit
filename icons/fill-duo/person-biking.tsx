import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonBiking({
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
          d="M11 13C11 11.3427 12.3433 10 14 10C15.6567 10 17 11.3427 17 13C17 14.6573 15.6567 16 14 16C12.3433 16 11 14.6573 11 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 13C1 11.3427 2.34327 10 4 10C5.65673 10 7 11.3427 7 13C7 14.6573 5.65673 16 4 16C2.34327 16 1 14.6573 1 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.98902 6.96482C8.88595 6.87345 8.73001 6.88216 8.63813 6.9825L7.39919 8.33343C7.39915 8.33347 7.39923 8.33338 7.39919 8.33343C7.29029 8.45256 7.32067 8.6408 7.45884 8.71968L9.57702 9.92978C10.0207 10.184 10.267 10.6839 10.1944 11.1921L9.74245 14.3561C9.68387 14.7661 9.30397 15.051 8.89392 14.9925C8.48387 14.9339 8.19894 14.554 8.25752 14.1439L8.68551 11.148L6.71513 10.0223C6.71507 10.0223 6.71519 10.0224 6.71513 10.0223C5.73951 9.46518 5.53588 8.1474 6.29278 7.32058L7.53183 5.96953C8.17798 5.26432 9.27005 5.20867 9.98483 5.84306L11.2152 6.93639C11.261 6.97723 11.3202 7 11.381 7H13.501C13.9152 7 14.251 7.33579 14.251 7.75C14.251 8.16422 13.9152 8.5 13.501 8.5H11.381C10.9519 8.5 10.5386 8.34234 10.2185 8.05738C10.2184 8.05728 10.2186 8.05749 10.2185 8.05738L8.98902 6.96482C8.98906 6.96486 8.98898 6.96479 8.98902 6.96482Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.75 5C11.5784 5 12.25 4.328 12.25 3.5C12.25 2.672 11.5784 2 10.75 2C9.9216 2 9.25 2.672 9.25 3.5C9.25 4.328 9.9216 5 10.75 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PersonBiking;
