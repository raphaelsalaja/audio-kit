import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeadSideVrHeadset({
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
          d="M10.25 17H5.24999C4.83589 17 4.49999 16.6641 4.49999 16.25V13.4937C2.03999 12.0015 0.802693 9.16951 1.40139 6.30181C1.93559 3.75251 4.00589 1.68271 6.55369 1.15041C9.24509 0.591305 11.8984 1.60891 13.4824 3.81101C13.5215 3.86471 13.5527 3.92331 13.5762 3.98531L15.0391 7.88571L16.0996 9.29981C16.2402 9.48681 16.2851 9.72801 16.2217 9.95261C16.1592 10.1772 15.9951 10.3598 15.7783 10.4463L14.7099 10.8735L14.6318 11.9487C14.5273 13.3794 13.3222 14.5 11.8886 14.5H10.9999V16.25C10.9999 16.6641 10.6641 17 10.25 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 3.5H10.75C9.2334 3.5 8 4.7334 8 6.25C8 7.7666 9.2334 9 10.75 9H14.25C15.2148 9 16 8.2148 16 7.25V5.25C16 4.2852 15.2148 3.5 14.25 3.5Z"
          fill={fill}
        />
        <path
          d="M8.75 7H2.1826C1.7685 7 1.4326 6.6641 1.4326 6.25C1.4326 5.8359 1.7685 5.5 2.1826 5.5H8.75C9.1641 5.5 9.5 5.8359 9.5 6.25C9.5 6.6641 9.1641 7 8.75 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeadSideVrHeadset;
