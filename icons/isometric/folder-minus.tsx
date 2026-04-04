import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderMinus({
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
          d="M17.75 2.875L18.5 3.25L20 4L21.5 4.75L22.25 5.125"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M16.8944 12.4472L6 7V8.5L11 11L16 13.5V23.5L18 22.5V14.2361C18 13.4785 17.572 12.786 16.8944 12.4472Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M4 13.191V10.9045C4 10.7187 4.19558 10.5978 4.3618 10.6809L8.72361 12.8618C8.893 12.9465 9 13.1196 9 13.309V15.5955C9 15.7813 8.80442 15.9022 8.6382 15.8191L4.27639 13.6382C4.107 13.5535 4 13.3804 4 13.191Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M6 8.36842V2.11803C6 1.37465 6.78231 0.891156 7.44721 1.22361L14.3614 4.68071C14.7654 4.88271 15.0569 5.25602 15.1549 5.69695L15.7935 8.57073C15.9241 9.15864 16.3128 9.65638 16.8514 9.92572L19.4472 11.2236C19.786 11.393 20 11.7393 20 12.118V20.5729C20 21.1411 19.679 21.6605 19.1708 21.9146L16.6708 23.1646C16.2485 23.3757 15.7515 23.3757 15.3292 23.1646L2.82918 16.9146C2.321 16.6605 2 16.1411 2 15.5729V8.11803C2 7.37465 2.78231 6.89116 3.44721 7.22361L15.4472 13.2236C15.786 13.393 16 13.7393 16 14.118V23"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default FolderMinus;
