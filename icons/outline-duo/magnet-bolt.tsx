import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnetBolt({
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
          d="M12.2545 5.2421L12.641 8.33297C12.771 9.37697 12.446 10.429 11.75 11.218C11.054 12.007 10.05 12.46 8.99803 12.46C7.94603 12.46 6.94303 12.007 6.24603 11.218C5.54903 10.429 5.22503 9.37697 5.35503 8.33297L5.74224 5.23648L2.51385 4.86902L2.14003 7.85897C2.02303 8.79297 2.06003 9.74997 2.32403 10.654C3.23603 13.776 6.01203 15.71 9.00003 15.71H8.99603C11.984 15.71 14.76 13.777 15.672 10.654C15.936 9.74997 15.973 8.79297 15.856 7.85897L15.4752 4.81268L12.2545 5.2421Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.51801 4.83801L5.743 5.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.482 4.83801L12.257 5.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5399 15.5366C10.0393 15.6511 9.52283 15.71 9.00003 15.71C6.01203 15.71 3.23603 13.776 2.32403 10.654C2.06003 9.74999 2.02303 8.793 2.14003 7.859L2.76303 2.87597C2.83203 2.32797 3.33103 1.93899 3.87903 2.00799L5.11903 2.16302C5.66703 2.23202 6.05603 2.73099 5.98703 3.27899L5.35503 8.333C5.22503 9.377 5.54903 10.429 6.24603 11.218C6.94303 12.007 7.94603 12.46 8.99803 12.46C10.05 12.46 11.054 12.007 11.75 11.218C12.446 10.429 12.771 9.377 12.641 8.333L12.009 3.27899C11.94 2.73099 12.329 2.23102 12.877 2.16302L14.117 2.00799C14.665 1.93899 15.165 2.32797 15.233 2.87597L15.8448 7.76946"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.917 14.25H13.25L15.5 10.75L14.583 13.75H17.25L15 17.25L15.917 14.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MagnetBolt;
