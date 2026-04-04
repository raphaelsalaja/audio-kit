import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Contrast({
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
          d="M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17V1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2454 14C13.7792 15.8289 11.5264 17 9 17V14H15.2454Z"
          fill={fill}
        />
        <path d="M9 1V4H15.2454C13.7792 2.17109 11.5264 1 9 1Z" fill={fill} />
        <path
          d="M16.9653 8.25H9V5.5H16.1958C16.6071 6.34418 16.8743 7.27152 16.9653 8.25Z"
          fill={fill}
        />
        <path
          d="M16.1958 12.5H9V9.75H16.9653C16.8743 10.7285 16.6071 11.6558 16.1958 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Contrast;
