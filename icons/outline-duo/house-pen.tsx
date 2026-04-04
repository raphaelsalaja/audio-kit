import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePen({
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
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.39453 1.96006C8.75253 1.68806 9.24847 1.68806 9.60547 1.96006L14.8555 5.95029C15.1043 6.13931 15.3389 6.43438 15.3389 6.74619V8.7667C14.8188 8.8188 14.3087 8.99568 13.8574 9.29795L13.6113 9.48057L13.501 9.58017L10.2051 12.8634C9.89043 13.1781 9.74151 13.521 9.66211 13.7423L8.89062 16.4415L4.75 16.2501C3.64503 16.2501 2.75006 15.355 2.75 14.2501V6.74619C2.75 6.43338 2.8958 6.1393 3.14453 5.95029L8.39453 1.96006Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 8.0214V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.94999C2.896 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H8.1651"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HousePen;
