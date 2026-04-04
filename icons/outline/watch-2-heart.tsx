import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch2Heart({
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
          d="M8.79797 11.949C8.92497 12.017 9.07397 12.017 9.20097 11.949C9.87397 11.591 11.999 10.294 11.999 8.186C12.002 7.26 11.269 6.506 10.359 6.5C9.81197 6.507 9.30297 6.788 8.99897 7.252C8.69497 6.789 8.18597 6.508 7.63897 6.5C6.72897 6.506 5.99597 7.26 5.99897 8.186C5.99897 10.295 8.12397 11.592 8.79697 11.949H8.79797Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.375 3.25L12.0947 2.12869C12.0391 1.90609 11.8391 1.75 11.6096 1.75H6.3904C6.161 1.75 5.961 1.90609 5.9053 2.12869L5.625 3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.625 14.75L5.9053 15.8713C5.9609 16.0939 6.1609 16.25 6.3904 16.25H11.6096C11.839 16.25 12.039 16.0939 12.0947 15.8713L12.375 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.25H5.25C4.1454 3.25 3.25 4.1454 3.25 5.25V12.75C3.25 13.8546 4.1454 14.75 5.25 14.75H12.75C13.8546 14.75 14.75 13.8546 14.75 12.75V5.25C14.75 4.1454 13.8546 3.25 12.75 3.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Watch2Heart;
