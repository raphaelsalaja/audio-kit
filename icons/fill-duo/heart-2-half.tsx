import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Half({
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
          d="M8.999 15.9731C8.5185 15.9731 8.0703 15.7817 7.7383 15.435L2.2588 9.74211C1.415 8.85441 0.969695 7.69572 1.001 6.47602C1.0332 5.25682 1.5371 4.12301 2.4219 3.28311C3.3057 2.44371 4.4619 2.00142 5.6836 2.02922C6.9033 2.06042 8.03709 2.56482 8.87699 3.44912C8.91799 3.49262 8.9581 3.53652 8.9981 3.58142C9.6485 2.83582 10.5284 2.32022 11.5313 2.11752C12.9405 1.83192 14.3897 2.22741 15.5001 3.20201C16.1466 3.76791 16.6231 4.53652 16.8419 5.36462C17.256 6.94472 16.8448 8.57942 15.7442 9.73862C15.7432 9.73962 15.7413 9.74102 15.7403 9.74202L10.2598 15.4358C9.9287 15.7815 9.4804 15.9731 8.999 15.9731Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 3.59859C8.9575 3.54979 8.9227 3.49559 8.8779 3.44819C8.0381 2.56389 6.9038 2.05949 5.6845 2.02829C4.4633 1.99459 3.3066 2.44189 2.4223 3.28219C0.597096 5.01559 0.522399 7.91109 2.2592 9.74119L7.7392 15.435C8.072 15.7809 8.5198 15.9716 8.9999 15.9721L9 3.59859Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2Half;
