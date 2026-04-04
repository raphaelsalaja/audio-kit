import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch2({
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
          d="M2.5 5.25C2.5 3.73119 3.73119 2.5 5.25 2.5H12.75C14.2688 2.5 15.5 3.73119 15.5 5.25V12.75C15.5 14.2688 14.2688 15.5 12.75 15.5H5.25C3.73119 15.5 2.5 14.2688 2.5 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 5.5C9.41421 5.5 9.75 5.83579 9.75 6.25V8.57536L11.8859 9.85688C12.2411 10.07 12.3562 10.5307 12.1431 10.8859C11.93 11.2411 11.4693 11.3562 11.1141 11.1431L8.61413 9.64312C8.38822 9.50758 8.25 9.26345 8.25 9V6.25C8.25 5.83579 8.58579 5.5 9 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.39037 1C5.81687 1 5.31693 1.39025 5.1777 1.94664L5.03735 2.5081C5.10752 2.50273 5.17843 2.5 5.24998 2.5H12.75C12.8215 2.5 12.8924 2.50273 12.9626 2.5081L12.8223 1.94681C12.6832 1.39008 12.183 1 11.6096 1H6.39037Z"
          fill={fill}
        />
        <path
          d="M5.03735 15.4919L5.17763 16.053C5.31675 16.6098 5.81697 17 6.39037 17H11.6096C12.1831 17 12.683 16.6097 12.8222 16.0533L12.9626 15.4919C12.8924 15.4973 12.8215 15.5 12.75 15.5H5.24998C5.17843 15.5 5.10752 15.4973 5.03735 15.4919Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch2;
