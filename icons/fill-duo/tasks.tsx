import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tasks({
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
          d="M13.75 5H7.75C6.23122 5 5 6.23122 5 7.75V13.75C5 15.2688 6.23122 16.5 7.75 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.75C16.5 6.23122 15.2688 5 13.75 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25 13H5V7.75C5 6.2334 6.2334 5 7.75 5H13V4.25C13 2.7334 11.7666 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13Z"
          fill={fill}
        />
        <path
          d="M10 13.5225C9.79305 13.5225 9.59574 13.4371 9.45314 13.2857L7.95314 11.6877C7.66994 11.3859 7.68454 10.9112 7.98634 10.6275C8.28904 10.3448 8.76364 10.359 9.04684 10.6613L9.93454 11.6065L12.3985 8.30182C12.6456 7.97032 13.1132 7.90001 13.4482 8.14911C13.7802 8.39671 13.8486 8.8663 13.6015 9.1983L10.6015 13.2209C10.4687 13.3991 10.2636 13.509 10.0419 13.5217C10.0282 13.5222 10.0137 13.5225 10 13.5225Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tasks;
