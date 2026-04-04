import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CameraOff({
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
          d="M16.6941 4.48788L6.18195 15H14.25C15.7692 15 17 13.7692 17 12.25V5.75001C17 5.29498 16.8896 4.86584 16.6941 4.48788Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.9183 3.0817C14.7044 3.02833 14.4805 3 14.25 3H12.5196L12.1954 2.13605C11.9397 1.45362 11.2868 1 10.557 1H7.44299C6.7132 1 6.06055 1.45306 5.80481 2.13549L5.48038 3H3.75C2.23079 3 1 4.23079 1 5.75V12.25C1 13.5387 1.88564 14.6199 3.0817 14.9183L14.9183 3.0817Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 7C4.664 7 5 6.6642 5 6.25C5 5.8358 4.664 5.5 4.25 5.5C3.836 5.5 3.5 5.8358 3.5 6.25C3.5 6.6642 3.836 7 4.25 7Z"
          fill={fill}
        />
        <path
          d="M11.4749 6.52508C10.8416 5.89173 9.9666 5.5 9 5.5C7.06675 5.5 5.5 7.06702 5.5 9C5.5 9.96651 5.89171 10.8415 6.52508 11.4749L11.4749 6.52508Z"
          fill={fill}
        />
        <path
          d="M8.69507 12.4869C8.79556 12.4956 8.89726 12.5 9 12.5C10.9333 12.5 12.5 10.933 12.5 9C12.5 8.89726 12.4956 8.79556 12.4869 8.69507L8.69507 12.4869Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CameraOff;
