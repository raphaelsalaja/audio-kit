import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenInNewWindow({
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
          d="M13.75 1.5H7.25C5.73122 1.5 4.5 2.73122 4.5 4.25V10.75C4.5 12.2688 5.73122 13.5 7.25 13.5H13.75C15.2688 13.5 16.5 12.2688 16.5 10.75V4.25C16.5 2.73122 15.2688 1.5 13.75 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 16.5H4.25C2.7334 16.5 1.5 15.2666 1.5 13.75V3.75C1.5 3.3359 1.8359 3 2.25 3C2.6641 3 3 3.3359 3 3.75V13.75C3 14.4395 3.5605 15 4.25 15H14.25C14.6641 15 15 15.3359 15 15.75C15 16.1641 14.6641 16.5 14.25 16.5Z"
          fill={fill}
        />
        <path
          d="M12.2803 6.96975L9.7803 4.46975C9.4873 4.17675 9.0127 4.17675 8.7198 4.46975C8.4269 4.76275 8.4268 5.23734 8.7198 5.53024L9.9395 6.7499H6.75C6.3359 6.7499 6 7.0858 6 7.4999C6 7.914 6.3359 8.2499 6.75 8.2499H9.9395L8.7198 9.46963C8.4268 9.76263 8.4268 10.2372 8.7198 10.5301C8.8663 10.6766 9.05771 10.7498 9.25011 10.7498C9.44251 10.7498 9.6339 10.6766 9.7804 10.5301L12.2804 8.03011C12.5734 7.73711 12.5733 7.26265 12.2803 6.96975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenInNewWindow;
