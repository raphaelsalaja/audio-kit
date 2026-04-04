import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleWater({
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
          d="M4.5 3.5V3.75C4.5 5.1362 3.8999 6.0923 3.2651 7.1045C2.643 8.0957 2 9.1206 2 10.5V15.75C2 16.7148 2.7852 17.5 3.75 17.5H7.9612C7.6727 17.0542 7.4796 16.5405 7.44 15.9795L7.0059 9.9107C6.9605 9.2906 7.1788 8.6719 7.6045 8.2159C8.0264 7.7618 8.627 7.5001 9.25 7.5001H9.9807C9.8993 7.3673 9.817 7.2355 9.7349 7.1046C9.1001 6.0924 8.5 5.1363 8.5 3.7501V3.5001L4.5 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.2343 13L10.4321 15.7676C10.4414 15.8936 10.5551 16 10.6811 16H13.8188C13.9448 16 14.0585 15.894 14.0678 15.7676L14.2656 13H10.2343Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.7988 9.2388C15.6572 9.0865 15.458 9 15.25 9H9.24999C9.04199 9 8.84279 9.0864 8.70119 9.2388C8.55909 9.3911 8.48679 9.5957 8.50199 9.8037L8.93609 15.8735C9.00059 16.7856 9.76719 17.5 10.6812 17.5H13.8189C14.733 17.5 15.4996 16.7856 15.564 15.8745L15.9981 9.8037C16.0132 9.5957 15.9409 9.3911 15.7988 9.2388ZM14.0678 15.7676C14.0585 15.8941 13.9448 16 13.8188 16H10.6811C10.5551 16 10.4414 15.8936 10.4321 15.7676L10.2343 13H14.2657L14.0678 15.7676Z"
          fill={fill}
        />
        <path
          d="M7.0123 10H2.0288C2.0101 10.1616 2 10.3281 2 10.5V15H7.3699L7.0123 10Z"
          fill={fill}
        />
        <path
          d="M8.5 1.75C8.5 1.0605 7.9395 0.5 7.25 0.5H5.75C5.0605 0.5 4.5 1.0605 4.5 1.75V3.5H8.5V1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BottleWater;
