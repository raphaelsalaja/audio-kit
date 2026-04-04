import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PercentageArrowDown({
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
          d="M9.25 5C10.2165 5 11 4.2165 11 3.25C11 2.2835 10.2165 1.5 9.25 1.5C8.2835 1.5 7.5 2.2835 7.5 3.25C7.5 4.2165 8.2835 5 9.25 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.75 10.5C15.7165 10.5 16.5 9.7165 16.5 8.75C16.5 7.7835 15.7165 7 14.75 7C13.7835 7 13 7.7835 13 8.75C13 9.7165 13.7835 10.5 14.75 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2197 1.71971L7.71975 9.21971C7.42675 9.51271 7.42675 9.98724 7.71975 10.2801C7.86625 10.4266 8.05815 10.4999 8.25005 10.4999C8.44195 10.4999 8.63386 10.4266 8.78036 10.2801L16.2804 2.78014C16.5734 2.48714 16.5734 2.01261 16.2804 1.71971C15.9874 1.42681 15.5126 1.42671 15.2197 1.71971Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.71973 12.2197L6.00003 13.9395V2.24988C6.00003 1.83578 5.66413 1.49988 5.25003 1.49988C4.83593 1.49988 4.50003 1.83578 4.50003 2.24988V13.9395L2.78034 12.2197C2.48734 11.9267 2.01273 11.9267 1.71983 12.2197C1.42693 12.5127 1.42683 12.9873 1.71983 13.2802L4.71983 16.2802C4.86633 16.4267 5.05824 16.4999 5.25014 16.4999C5.44204 16.4999 5.63393 16.4267 5.78043 16.2802L8.78043 13.2802C9.07343 12.9872 9.07343 12.5126 8.78043 12.2197C8.48743 11.9268 8.01263 11.9267 7.71973 12.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PercentageArrowDown;
