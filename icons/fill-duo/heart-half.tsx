import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHalf({
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
          d="M8.99901 16.0874C8.71871 16.0874 8.43851 16.0205 8.18261 15.8872C6.55661 15.0381 1.25101 11.8603 1.25101 6.6089C1.24121 4.0845 3.29201 2.0156 5.82231 2C7.02841 2.0151 8.15921 2.4902 9.00001 3.3057C9.83981 2.4903 10.9678 2.0152 12.1631 2C14.708 2.0156 16.7588 4.0845 16.749 6.6118C16.749 11.8618 11.4433 15.0386 9.81641 15.8872C9.56051 16.0205 9.28031 16.0874 8.99901 16.0874Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00001 3.3057C8.15921 2.4903 7.02831 2.0152 5.82231 2C3.29201 2.0156 1.24121 4.0845 1.25101 6.6089C1.25101 11.8604 6.55671 15.0381 8.18261 15.8872C8.43851 16.0205 8.71871 16.0874 8.99901 16.0874H9.00001V3.3057Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartHalf;
