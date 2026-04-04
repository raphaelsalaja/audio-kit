import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Earphones({
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
          d="M9.478 3.69079C8.9513 2.78369 7.981 2.07219 6.7692 1.84699C4.733 1.46859 2.8165 2.59249 2.4886 4.35719C2.295 5.39919 2.7088 6.42439 3.491 7.17319L2.31911 13.4798C2.21831 14.0225 2.5769 14.5448 3.1196 14.6457L4.1028 14.8284C4.6455 14.9292 5.16781 14.5706 5.26871 14.0279L6.33361 8.29689C7.26371 8.30239 8.12641 8.00919 8.77201 7.48999L9.478 3.69079Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.522 14.3092C9.0487 15.2163 10.019 15.9278 11.2308 16.153C13.267 16.5314 15.1835 15.4075 15.5114 13.6428C15.705 12.6008 15.2912 11.5756 14.509 10.8268L15.6809 4.5202C15.7817 3.9775 15.4231 3.4552 14.8804 3.3543L13.8972 3.1716C13.3545 3.0708 12.8322 3.4294 12.7313 3.9721L11.6664 9.7031C10.7363 9.6976 9.8736 9.9908 9.228 10.51L8.522 14.3092Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.62289 5.3714L6.7182 4.8587"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.478 3.69079C8.9513 2.78369 7.981 2.07219 6.7692 1.84699C4.733 1.46859 2.8165 2.59249 2.4886 4.35719C2.295 5.39919 2.7088 6.42439 3.491 7.17319L2.31911 13.4798C2.21831 14.0225 2.5769 14.5448 3.1196 14.6457L4.1028 14.8284C4.6455 14.9292 5.16781 14.5706 5.26871 14.0279L6.33361 8.29689C7.26371 8.30239 8.12641 8.00919 8.77201 7.48999L9.478 3.69079Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.3771 12.6286L11.2818 13.1413"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.522 14.3092C9.0487 15.2163 10.019 15.9278 11.2308 16.153C13.267 16.5314 15.1835 15.4075 15.5114 13.6428C15.705 12.6008 15.2912 11.5756 14.509 10.8268L15.6809 4.5202C15.7817 3.9775 15.4231 3.4552 14.8804 3.3543L13.8972 3.1716C13.3545 3.0708 12.8322 3.4294 12.7313 3.9721L11.6664 9.7031C10.7363 9.6976 9.8736 9.9908 9.228 10.51L8.522 14.3092Z"
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

export default Earphones;
