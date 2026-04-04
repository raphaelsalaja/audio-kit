import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AbstractBlock({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M4.5 8.5V9.63755L5.82695 8.91347L12 12V19.5L13.5 19.1794V11.1794L4.5 6.67944V8.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22.5 6.67944L22.4406 17.5523L14.2099 21.8245H13.6478L13.5 21.3024V19.1794V11.1794L22.5 6.67944Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M13.5 11V21.8213" stroke={fill} />
        <path
          d="M4.71997 6.60999L13.5001 11.0001L22.2802 6.60999"
          stroke={fill}
        />
        <path
          d="M4.5 9.5V7.16071C4.5 6.78339 4.71238 6.43819 5.04918 6.26809L12.8238 2.34153C13.249 2.12676 13.751 2.12676 14.1762 2.34153L21.9508 6.26809C22.2876 6.43819 22.5 6.78339 22.5 7.16071V16.8393C22.5 17.2166 22.2876 17.5618 21.9508 17.7319L14.1762 21.6585C13.751 21.8732 13.249 21.8732 12.8238 21.6585L10.5 20.4848"
          stroke={fill}
        />
        <path
          d="M7.5 8.04541L2.03675 10.9012C1.70681 11.0737 1.5 11.4151 1.5 11.7874V18.2165C1.5 18.5867 1.70448 18.9266 2.0315 19.1L6.80227 21.6299C7.23901 21.8616 7.76181 21.8631 8.19991 21.6341L13.5 18.8636"
          stroke={fill}
        />
        <path d="M7.5 22V14.5L1.5 11.5" stroke={fill} />
        <path d="M7.5 14.5L13.5 11.5" stroke={fill} />
      </g>
    </svg>
  );
}

export default AbstractBlock;
