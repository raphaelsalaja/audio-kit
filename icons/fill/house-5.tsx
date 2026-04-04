import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House5({
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
          d="M13.75 6.019C13.336 6.019 13 5.683 13 5.269V2.75C13 2.336 13.336 2 13.75 2C14.164 2 14.5 2.336 14.5 2.75V5.269C14.5 5.683 14.164 6.019 13.75 6.019Z"
          fill={secondaryfill}
        />
        <path
          d="M15.792 5.848L9.446 1.147C9.181 0.951 8.818 0.951 8.553 1.147L2.208 5.848C1.764 6.177 1.5 6.702 1.5 7.254V13.75C1.5 15.267 2.733 16.5 4.25 16.5H5.5V12.75C5.5 11.7835 6.2835 11 7.25 11C8.2165 11 9 11.7835 9 12.75V16.5H13.75C15.267 16.5 16.5 15.267 16.5 13.75V7.254C16.5 6.702 16.235 6.176 15.792 5.848ZM11.25 10.5H12.75C13.164 10.5 13.5 10.164 13.5 9.75C13.5 9.336 13.164 9 12.75 9H11.25C10.836 9 10.5 9.336 10.5 9.75C10.5 10.164 10.836 10.5 11.25 10.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default House5;
