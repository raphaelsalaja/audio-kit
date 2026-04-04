import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WineGlass({
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
          d="M4.50642 1.65212C4.55554 1.27896 4.87363 1 5.25001 1H12.75C13.1264 1 13.4445 1.27896 13.4936 1.65212L14.0916 6.19503C14.4967 9.2705 12.1018 12 9.00001 12C5.89786 12 3.50442 9.27032 3.90841 6.19531L4.50642 1.65212Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 11.9459V15.5H5.75C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17H12.25C12.6642 17 13 16.6642 13 16.25C13 15.8358 12.6642 15.5 12.25 15.5H9.75V11.9459C9.50556 11.9815 9.25518 12 9.00001 12C8.74482 12 8.49443 11.9815 8.25 11.9459Z"
          fill={fill}
        />
        <path
          d="M12.4213 5H5.57868L5.39562 6.39069C5.10973 8.5676 6.80421 10.5 9 10.5C11.1961 10.5 12.8912 8.56746 12.6044 6.39097L12.4213 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WineGlass;
