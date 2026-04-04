import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset4({
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
          d="M12.8125 14.001C11.6025 14.001 10.665 13.4829 10.1338 12.9077C10.0205 12.7847 9.91599 12.665 9.81839 12.5517C9.39069 12.059 9.2549 11.934 9 11.934C8.7451 11.934 8.60941 12.059 8.18161 12.5517C8.08391 12.665 7.97949 12.7846 7.86709 12.9072C7.19129 13.6377 5.86509 14.2744 4.15319 13.8794C2.33679 13.458 1.09169 12.0024 0.824092 9.9849C0.542892 7.8907 1.0565 6.5274 2.5946 5.2803C4.0526 4.0991 6.6659 4 8.9999 4C11.3339 4 13.9472 4.0991 15.4042 5.2803C16.9433 6.5264 17.4569 7.8897 17.1757 9.9859C16.9071 12.0025 15.662 13.4586 13.8466 13.8795C13.4833 13.9635 13.1387 14.001 12.8125 14.001Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default VrHeadset4;
