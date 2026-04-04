import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockSnooze({
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
          d="M11.6059 1.43402C11.7717 1.9542 12.1215 2.39224 12.5789 2.67158L12.0567 3.26836C11.4754 3.93278 11.3363 4.87579 11.7011 5.67974C12.0659 6.48369 12.8672 7 13.75 7H16.748C16.9125 7.63924 17 8.3094 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9C1 4.58179 4.58179 1 9 1C9.91235 1 10.789 1.15273 11.6059 1.43402Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 4C9.41421 4 9.75 4.33579 9.75 4.75V8.60704L12.6769 10.6334C13.0175 10.8691 13.1024 11.3363 12.8666 11.6769C12.6309 12.0175 12.1637 12.1024 11.8231 11.8666L8.57309 9.61664C8.37074 9.47656 8.25 9.24611 8.25 9V4.75C8.25 4.33579 8.58579 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 0.75C13 0.335786 13.3358 0 13.75 0H17.25C17.5443 0 17.8114 0.172104 17.933 0.440088C18.0546 0.708071 18.0082 1.02241 17.8144 1.24388L15.4028 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H13.75C13.4557 5.5 13.1886 5.3279 13.067 5.05991C12.9454 4.79193 12.9918 4.47759 13.1856 4.25612L15.5972 1.5H13.75C13.3358 1.5 13 1.16421 13 0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClockSnooze;
