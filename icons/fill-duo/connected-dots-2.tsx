import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConnectedDots2({
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
          d="M5.09128 12.2847C4.96778 12.2847 4.84278 12.2544 4.72748 12.1905C4.36518 11.9893 4.23478 11.5328 4.43598 11.1705L7.25188 6.10209C7.45308 5.73979 7.90958 5.60939 8.27188 5.81059C8.63418 6.01179 8.76458 6.46829 8.56338 6.83059L5.74748 11.899C5.61028 12.1456 5.35438 12.2847 5.09128 12.2847Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.9087 12.2847C12.6455 12.2847 12.3897 12.1455 12.2525 11.899L9.43659 6.83059C9.23539 6.46829 9.36579 6.01179 9.72809 5.81059C10.088 5.60939 10.546 5.73979 10.7481 6.10209L13.564 11.1705C13.7652 11.5328 13.6348 11.9893 13.2725 12.1905C13.1573 12.2545 13.0323 12.2847 12.9087 12.2847Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.7651 14.5H6.25C5.8359 14.5 5.5 14.1641 5.5 13.75C5.5 13.3359 5.8359 13 6.25 13H11.7651C12.1792 13 12.5151 13.3359 12.5151 13.75C12.5151 14.1641 12.1792 14.5 11.7651 14.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7C10.5188 7 11.75 5.76878 11.75 4.25C11.75 2.73122 10.5188 1.5 9 1.5C7.48122 1.5 6.25 2.73122 6.25 4.25C6.25 5.76878 7.48122 7 9 7Z"
          fill={fill}
        />
        <path
          d="M14.25 16.5C15.7688 16.5 17 15.2688 17 13.75C17 12.2312 15.7688 11 14.25 11C12.7312 11 11.5 12.2312 11.5 13.75C11.5 15.2688 12.7312 16.5 14.25 16.5Z"
          fill={fill}
        />
        <path
          d="M3.75 16.5C5.26878 16.5 6.5 15.2688 6.5 13.75C6.5 12.2312 5.26878 11 3.75 11C2.23122 11 1 12.2312 1 13.75C1 15.2688 2.23122 16.5 3.75 16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ConnectedDots2;
