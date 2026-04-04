import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCoin({
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
          d="M3.01562 5.24747C3.01563 5.66168 3.35141 5.99747 3.76562 5.99747C5.59732 5.99746 7.43006 5.9981 9.26308 5.99873C11.092 5.99937 12.9213 6 14.75 6C15.7162 6 16.5 6.78379 16.5 7.75V14.25C16.5 15.2162 15.7162 16 14.75 16H8.49483C8.81875 15.3181 9 14.5552 9 13.75C9 10.8504 6.64964 8.5 3.75 8.5C2.94479 8.5 2.18193 8.68125 1.5 9.00517V4.75C1.5 3.23079 2.73079 2 4.25 2H12.75C13.7162 2 14.5 2.78379 14.5 3.75C14.5 3.81354 14.5 3.87708 14.5001 3.94062C14.5001 4.12623 14.5002 4.31184 14.4996 4.49744L3.76562 4.49747C3.35141 4.49747 3.01562 4.83325 3.01562 5.24747Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.75 12.25C13.44 12.25 14 11.69 14 11C14 10.31 13.44 9.75 12.75 9.75C12.06 9.75 11.5 10.31 11.5 11C11.5 11.69 12.06 12.25 12.75 12.25Z"
          fill={fill}
        />
        <path
          d="M0 13.75C0 11.6788 1.67879 10 3.75 10C5.82121 10 7.5 11.6788 7.5 13.75C7.5 15.8212 5.82121 17.5 3.75 17.5C1.67879 17.5 0 15.8212 0 13.75ZM4.5 13C4.5 12.5858 4.16421 12.25 3.75 12.25C3.33579 12.25 3 12.5858 3 13V14.5C3 14.9142 3.33579 15.25 3.75 15.25C4.16421 15.25 4.5 14.9142 4.5 14.5V13Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default WalletCoin;
