import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneXmark2({
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
          d="M3.5 12.8828V7.75C3.5 5.4067 5.4067 3.5 7.75 3.5H12.8829C12.554 2.3494 11.5048 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.5049 2.3494 12.5542 3.5 12.8828Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75 16.5H13.75C15.2666 16.5 16.5 15.2666 16.5 13.75V7.75C16.5 6.2334 15.2666 5 13.75 5H7.75C6.2334 5 5 6.2334 5 7.75V13.75C5 15.2666 6.2334 16.5 7.75 16.5ZM8.2197 9.2803C7.9267 8.9873 7.9267 8.51269 8.2197 8.21979C8.3662 8.07329 8.5576 8.00009 8.75 8.00009C8.9424 8.00009 9.1338 8.07329 9.2803 8.21979L10.75 9.68951L12.2197 8.21979C12.3662 8.07329 12.5576 8.00009 12.75 8.00009C12.9424 8.00009 13.1338 8.07329 13.2803 8.21979C13.5733 8.51279 13.5733 8.9874 13.2803 9.2803L11.8106 10.75L13.2803 12.2197C13.5733 12.5127 13.5733 12.9873 13.2803 13.2802C12.9873 13.5731 12.5127 13.5732 12.2198 13.2802L10.7501 11.8105L9.2804 13.2802C8.9874 13.5732 8.5128 13.5732 8.2199 13.2802C7.927 12.9872 7.9269 12.5126 8.2199 12.2197L9.6896 10.75L8.2197 9.2803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneXmark2;
