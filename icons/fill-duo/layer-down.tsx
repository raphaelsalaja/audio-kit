import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerDown({
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
          d="M9.00101 12.2432C8.72171 12.2432 8.44139 12.1763 8.18649 12.0425L2.3154 8.95174C1.8213 8.69144 1.5146 8.18309 1.5146 7.62459C1.5146 7.06609 1.8212 6.5577 2.3154 6.2975L8.1855 3.20674C8.6982 2.93674 9.30661 2.93813 9.81731 3.20723L15.6864 6.2975C16.1805 6.5578 16.4872 7.06609 16.4872 7.62459C16.4872 8.18309 16.1806 8.69154 15.6864 8.95174L9.8163 12.042L9.81531 12.0425C9.56041 12.1763 9.28031 12.2432 9.00101 12.2432Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.9697 13.2197L9.75 14.4394V7.99988C9.75 7.58578 9.4141 7.24988 9 7.24988C8.5859 7.24988 8.25 7.58578 8.25 7.99988V14.4394L7.03031 13.2197C6.73731 12.9267 6.2627 12.9267 5.9698 13.2197C5.6769 13.5127 5.6768 13.9873 5.9698 14.2802L8.4698 16.7802C8.6163 16.9267 8.80771 16.9999 9.00011 16.9999C9.19251 16.9999 9.3839 16.9267 9.5304 16.7802L12.0304 14.2802C12.3234 13.9872 12.3234 13.5126 12.0304 13.2197C11.7374 12.9268 11.2626 12.9267 10.9697 13.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayerDown;
