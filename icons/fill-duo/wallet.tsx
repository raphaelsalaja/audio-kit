import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet({
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
          d="M3.01562 5.24747C3.01563 5.66168 3.35141 5.99747 3.76562 5.99747C7.42468 5.99746 11.0883 6 14.75 6C15.7162 6 16.5 6.78379 16.5 7.75V14.25C16.5 15.2162 15.7162 16 14.75 16H4.2C2.70883 16 1.5 14.7912 1.5 13.3V4.75C1.5 3.23079 2.73079 2 4.25 2H12.75C13.7162 2 14.5 2.78379 14.5 3.75L14.5001 3.94062C14.5001 4.12623 14.5002 4.31184 14.4996 4.49744L3.76562 4.49747C3.35141 4.49747 3.01562 4.83325 3.01562 5.24747Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.75 12.25C13.4404 12.25 14 11.69 14 11C14 10.31 13.4404 9.75 12.75 9.75C12.0596 9.75 11.5 10.31 11.5 11C11.5 11.69 12.0596 12.25 12.75 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wallet;
