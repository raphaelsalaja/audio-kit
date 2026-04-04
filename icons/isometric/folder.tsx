import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder({
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
          d="M17.8944 12.4472L7 7V8.5L12 11L17 13.5V23.5L19 22.5V14.2361C19 13.4785 18.572 12.786 17.8944 12.4472Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M5 13.191V10.9045C5 10.7187 5.19558 10.5978 5.3618 10.6809L9.72361 12.8618C9.893 12.9465 10 13.1196 10 13.309V15.5955C10 15.7813 9.80442 15.9022 9.6382 15.8191L5.27639 13.6382C5.107 13.5535 5 13.3804 5 13.191Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7 8.37424V2.11803C7 1.37465 7.78231 0.891156 8.44721 1.22361L15.3614 4.68071C15.7654 4.88271 16.0569 5.25602 16.1549 5.69695L16.7935 8.57073C16.9241 9.15864 17.3128 9.65638 17.8514 9.92572L20.4472 11.2236C20.786 11.393 21 11.7393 21 12.118V20.5729C21 21.1411 20.679 21.6605 20.1708 21.9146L17.6708 23.1646C17.2485 23.3757 16.7515 23.3757 16.3292 23.1646L3.82918 16.9146C3.321 16.6605 3 16.1411 3 15.5729V8.11803C3 7.37465 3.78231 6.89116 4.44721 7.22361L16.4472 13.2236C16.786 13.393 17 13.7393 17 14.118V23"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Folder;
